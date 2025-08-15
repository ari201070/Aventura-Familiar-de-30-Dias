
import React, { useState, useCallback, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Language, Currency, AppContextType, TranslationSet } from './types';
import { translations, LANGUAGES, CURRENCIES, CITIES } from './constants';
import HomePage from './pages/HomePage';
import CityDetailPage from './pages/CityDetailPage';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.ES);
  const [currency, setCurrency] = useState<Currency>(Currency.ARS);

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === Language.HE ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string, replacements?: Record<string, string>): string => {
    const langSet = translations[language] as TranslationSet;
    let translatedString = langSet[key] || key; // Fallback to key if translation not found
    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        translatedString = translatedString.replace(`{${placeholder}}`, replacements[placeholder]);
      });
    }
    return translatedString;
  }, [language]);

  return (
    <AppContext.Provider value={{ language, setLanguage, currency, setCurrency, t }}>
      <HashRouter>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100">
          <TopBar />
          <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/city/:cityId" element={<CityDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;