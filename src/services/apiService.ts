import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PolygonRateResponse, Language, GroundingChunk } from '../types.ts';
import { POLYGON_API_KEY } from '../constants.ts';

// --- Gemini AI Service ---
let ai: GoogleGenAI | null = null;

// API key MUST be obtained EXCLUSIVELY from process.env.API_KEY
// Assume this variable is pre-configured, valid, and accessible.
if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} else {
  console.warn("Gemini API key not found in process.env.API_KEY. AI features will be limited.");
}

export const askGemini = async (userPrompt: string, currentLanguage: Language): Promise<string> => {
  if (!ai) {
    const apiKeyMissingMessage = "AI service is unavailable (API key from process.env.API_KEY is missing).";
    return currentLanguage === Language.HE ? `שירות הבינה המלאכותית אינו זמין (חסר מפתח API ב-process.env.API_KEY).` : apiKeyMissingMessage;
  }
  try {
    const languageInstruction = currentLanguage === Language.HE ? "Respond in Hebrew." : "Respond in Spanish.";
    const fullPrompt = `${userPrompt}\n\n${languageInstruction}`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return currentLanguage === Language.HE ? "אירעה שגיאה בתקשורת עם הבינה המלאכותית." : "An error occurred while contacting the AI.";
  }
};

export const findEventsWithGoogleSearch = async (
  prompt: string,
  currentLanguage: Language
): Promise<{ text: string; sources: GroundingChunk[] }> => {
  if (!ai) {
    const apiKeyMissingMessage = "AI service is unavailable (API key from process.env.API_KEY is missing).";
    const text = currentLanguage === Language.HE 
      ? `שירות הבינה המלאכותית אינו זמין (חסר מפתח API ב-process.env.API_KEY).` 
      : apiKeyMissingMessage;
    return { text, sources: [] };
  }
  try {
    const languageInstruction = currentLanguage === Language.HE ? "Respond in Hebrew." : "Respond in Spanish.";
    const fullPrompt = `${prompt}\n\n${languageInstruction}`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] || [];
    
    return { text: response.text, sources };
  } catch (error) {
    console.error("Error calling Gemini API with Google Search:", error);
    const text = currentLanguage === Language.HE 
      ? "אירעה שגיאה בחיפוש אירועים." 
      : "An error occurred while searching for events.";
    return { text, sources: [] };
  }
};


// --- Currency Conversion Service (Polygon.io) ---
const getPolygonExchangeRate = async (fromCurrency: string, toCurrency: string): Promise<number | null> => {
  if (fromCurrency === toCurrency) return 1;

  if (!POLYGON_API_KEY) {
    console.warn("Polygon.io API key not found (VITE_POLYGON_API_KEY). Using approximate fallback conversion rates.");
    // Fallback for missing Polygon key
    const usdToArs = 900;
    const usdToEur = 0.93;
    const usdToIls = 3.72;

    const rates: { [key: string]: number } = {
      'USD_ARS': usdToArs, 'ARS_USD': 1 / usdToArs,
      'USD_EUR': usdToEur, 'EUR_USD': 1 / usdToEur,
      'USD_ILS': usdToIls, 'ILS_USD': 1 / usdToIls,
      // Cross rates via USD
      'ARS_EUR': (1 / usdToArs) * usdToEur, 'EUR_ARS': usdToArs * (1 / usdToEur),
      'ARS_ILS': (1 / usdToArs) * usdToIls, 'ILS_ARS': usdToArs * (1 / usdToIls),
      'EUR_ILS': (1 / usdToEur) * usdToIls, 'ILS_EUR': usdToEur * (1 / usdToIls),
    };
    const key = `${fromCurrency}_${toCurrency}`;
    return rates[key] || null;
  }

  const url = `https://api.polygon.io/v2/aggs/ticker/C:${fromCurrency}${toCurrency}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`;
  try {
    const response = await fetch(url);
    const data: PolygonRateResponse = await response.json();

    if (!response.ok || data.status === "ERROR" || !data.results || data.results.length === 0) {
      console.error(`Error fetching rate for ${fromCurrency}/${toCurrency} from Polygon.io: ${data.error || response.statusText}`);
      return null;
    }
    return data.results[0].c; 
  } catch (error) {
    console.error(`Network error fetching rate for ${fromCurrency}/${toCurrency}:`, error);
    return null;
  }
};

export const convertCurrency = async (amount: number, fromCurrency: string, toCurrency: string): Promise<number | null> => {
  if (fromCurrency === toCurrency) return amount;

  let rate = await getPolygonExchangeRate(fromCurrency, toCurrency);

  if (rate !== null) {
    return amount * rate;
  } else {
    // Try bridge conversion via USD if direct rate failed (this is a secondary fallback)
    if (fromCurrency !== 'USD' && toCurrency !== 'USD') {
      console.log(`Direct rate ${fromCurrency}->${toCurrency} not found. Trying bridge conversion via USD.`);
      const rateFromToUSD = await getPolygonExchangeRate(fromCurrency, 'USD');
      const rateUSDToTo = await getPolygonExchangeRate('USD', toCurrency);

      if (rateFromToUSD !== null && rateUSDToTo !== null) {
        const finalAmount = amount * rateFromToUSD * rateUSDToTo;
        return finalAmount;
      }
    }
  }
  
  console.error(`Could not convert ${fromCurrency} to ${toCurrency}, even with USD bridge.`);
  return null; 
};

const exchangeRateCache = new Map<string, { rate: number, timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export const getCachedExchangeRate = async (from: string, to: string): Promise<number | null> => {
  if (from === to) return 1.0;
  const cacheKey = `${from}_${to}`;
  const cached = exchangeRateCache.get(cacheKey);

  if (cached && (Date.now() - cached.timestamp < CACHE_DURATION)) {
    return cached.rate;
  }

  const rate = await getPolygonExchangeRate(from, to);
  if (rate !== null) {
    exchangeRateCache.set(cacheKey, { rate, timestamp: Date.now() });
  }
  return rate;
};