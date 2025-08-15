
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PolygonRateResponse, Language } from '../types';
import { GEMINI_API_KEY, POLYGON_API_KEY } from '../constants';

// --- Gemini AI Service ---
let ai: GoogleGenAI | null = null;
if (GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
} else {
  console.warn("Gemini API key not found (process.env.API_KEY). AI features will be limited.");
}

export const askGemini = async (userPrompt: string, currentLanguage: Language): Promise<string> => {
  if (!ai) {
    return currentLanguage === Language.HE ? "שירות הבינה המלאכותית אינו זמין (חסר מפתח API)." : "AI service is unavailable (API key missing).";
  }
  try {
    // The language for the response is now typically part of the userPrompt from the component
    // but we can still add a general instruction if needed.
    const languageInstruction = currentLanguage === Language.HE ? "Respond in Hebrew." : "Respond in Spanish.";
    const fullPrompt = `${userPrompt}\n\n${languageInstruction}`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17", // Use the latest appropriate model
      contents: fullPrompt,
      // config: { // Consider if thinkingConfig is needed for specific tasks
      //   thinkingConfig: { thinkingBudget: 0 } // for low latency if applicable
      // }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return currentLanguage === Language.HE ? "אירעה שגיאה בתקשורת עם הבינה המלאכותית." : "An error occurred while contacting the AI.";
  }
};

// --- Currency Conversion Service (Polygon.io) ---
const getPolygonExchangeRate = async (fromCurrency: string, toCurrency: string): Promise<number | null> => {
  if (!POLYGON_API_KEY) {
    console.warn("Polygon.io API key not found (REACT_APP_POLYGON_API_KEY). Currency conversion will be approximate or disabled.");
    if (fromCurrency === 'USD' && toCurrency === 'ARS') return 900; 
    if (fromCurrency === 'ARS' && toCurrency === 'USD') return 1/900;
    return null;
  }

  if (fromCurrency === toCurrency) return 1;

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
