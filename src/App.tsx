import React, { useState, useCallback, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Language, Currency, AppContextType, TranslationSet } from './types.ts';
import { translations } from './constants.ts';
import HomePage from './pages/HomePage.tsx';
import CityDetailPage from './pages/CityDetailPage.tsx';
import TopBar from './components/TopBar.tsx';
import Footer from './components/Footer.tsx';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// --- Scroll to Top Button Component ---
const ScrollToTopButton: React.FC = () => {
  const { t } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-white/80 backdrop-blur-md text-indigo-600 p-0 w-14 h-14 rounded-full shadow-lg border-2 border-indigo-600 hover:bg-indigo-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out flex items-center justify-center"
          aria-label={t('scroll_to_top_label')}
        >
          <i className="fas fa-chevron-up text-2xl"></i>
        </button>
      )}
    </>
  );
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
          <ScrollToTopButton />
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
