export enum Language {
  ES = 'es',
  HE = 'he',
}

export enum Currency {
  ARS = 'ARS',
  USD = 'USD',
  EUR = 'EUR',
  ILS = 'ILS',
}

export interface PointOfInterest {
  id: string;
  nameKey: string;
  coords: [number, number];
  descriptionKey?: string;
}

export interface BudgetItem {
  conceptKey: string; // e.g., 'budget_concept_accommodation'
  value: string;      // e.g., '50-120' - The value is stored directly here
  isPerDay: boolean;  // To help with calculations
}


export interface City {
  id: string;
  nameKey: string; // Translation key for the name
  coords: [number, number];
  image: string; // Path to image, e.g., /docs/imagenes/buenosaires.jpg
  descriptionKey: string;
  activitiesKey: string;
  accommodationKey: string;
  budgetItems: BudgetItem[]; // Replaces budgetKey
  pointsOfInterest?: PointOfInterest[]; // Optional array of POIs
}

export interface TranslationSet {
  [key: string]: string;
}

export interface Translations {
  [Language.ES]: TranslationSet;
  [Language.HE]: TranslationSet;
}

export interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

export interface PackingItem {
  id: string;
  text: string;
  type: 'essential' | 'optional';
  originalLang: Language;
  textKey?: string; 
}

export interface PolygonRateResponse {
  status?: string;
  request_id?: string;
  ticker?: string;
  results?: { c: number }[]; 
  error?: string;
}

export interface TransportLeg {
  id: string;
  fromKey: string;
  toKey: string;
  meanKey: string;
  timeKey: string;
  priceKey: string; 
  company: string;
  basePriceARS: number;
  companyUrlKey?: string; // Optional: translation key for the company's URL
}

export interface AIPromptContent {
  titleKey: string;
  descriptionKey: string;
  buttonKey: string;
  promptKeySuffix: string; // e.g., 'ai_prompt_menu' -> cityId + promptKeySuffix
  icon: string; // FontAwesome icon class
  userInputPlaceholderKey: string; // Placeholder for the user input textarea
}

// Types for Grounding / Google Search Tool
export interface WebChunk {
  web: {
    uri: string;
    title: string;
  };
}

export type GroundingChunk = WebChunk; // Can be extended if other chunk types are used

export interface AIResponseType {
  text: string;
  lang: Language;
  originalBasePromptKey: string;
  originalUserInput: string;
  sources?: GroundingChunk[];
}