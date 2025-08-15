
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../App';
import { Language, Currency } from '../types';
import { LANGUAGES, CURRENCIES } from '../constants';

const TopBar: React.FC = () => {
  const { language, setLanguage, currency, setCurrency, t } = useAppContext();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const commonButtonClasses = "px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const activeLangButtonClasses = "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500";
  const inactiveLangButtonClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400";
  const activeCurrButtonClasses = "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500";
  const inactiveCurrButtonClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400";

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold text-indigo-700 hover:text-indigo-900 transition-colors">
          <i className="fas fa-route mr-2"></i>{t('tituloPrincipal')}
        </Link>
        
        <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
          {!isHomePage && (
            <Link
              to="/"
              className={`${commonButtonClasses} bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-400`}
            >
              <i className={`fas ${language === Language.HE ? 'fa-arrow-right' : 'fa-arrow-left'} mr-2`}></i>
              {t('volverItinerario')}
            </Link>
          )}

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">{t('idioma')}:</span>
            {LANGUAGES.map(lang => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`${commonButtonClasses} ${language === lang.code ? activeLangButtonClasses : inactiveLangButtonClasses}`}
              >
                {lang.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">{t('moneda')}:</span>
            {CURRENCIES.map(curr => (
              <button
                key={curr.code}
                onClick={() => setCurrency(curr.code)}
                className={`${commonButtonClasses} ${currency === curr.code ? activeCurrButtonClasses : inactiveCurrButtonClasses}`}
              >
                {curr.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;