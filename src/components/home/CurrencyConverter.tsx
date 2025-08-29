import React, { useState } from 'react';
import { useAppContext } from '../../App.tsx';
import { Currency } from '../../types.ts';
import { convertCurrency as fetchConvertedCurrency } from '../../services/apiService.ts';

const CurrencyConverter: React.FC = () => {
  const { t, language } = useAppContext();
  const [amountToConvert, setAmountToConvert] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<Currency>(Currency.ARS);
  const [toCurrency, setToCurrency] = useState<Currency>(Currency.USD);
  const [conversionResult, setConversionResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCurrencyConversion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amountToConvert || parseFloat(amountToConvert) <= 0) {
      setConversionResult(t('error') + ': ' + (language === 'he' ? 'הזן סכום חוקי' : 'Enter a valid amount'));
      return;
    }
    setIsLoading(true);
    setConversionResult('');
    const numericAmount = parseFloat(amountToConvert);
    const result = await fetchConvertedCurrency(numericAmount, fromCurrency, toCurrency);
    setIsLoading(false);
    if (result !== null) {
      setConversionResult(`${numericAmount.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR')} ${fromCurrency} = ${result.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${toCurrency}`);
    } else {
      setConversionResult(t('error') + ': ' + (language === 'he' ? 'לא ניתן היה לבצע המרה' : 'Conversion failed'));
    }
  };
  
  const sectionTitleClasses = "text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500";
  const cardClasses = "bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300";

  return (
    <section className={cardClasses}>
      <h2 className={`${sectionTitleClasses} flex items-center`}><i className="fas fa-coins mr-3 text-indigo-600"></i>{t('conversorTitulo')}</h2>
      <form onSubmit={handleCurrencyConversion} className="space-y-4 sm:space-y-0 sm:flex sm:items-end sm:gap-4">
        <div className="flex-grow">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">{t('montoPlaceholder')}</label>
          <input
            type="number"
            id="amount"
            step="0.01"
            min="0"
            value={amountToConvert}
            onChange={(e) => setAmountToConvert(e.target.value)}
            placeholder={t('montoPlaceholder')}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-1">{t('desde')}</label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value as Currency)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
          >
            {Object.values(Currency).map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </div>
        <div className="self-end pb-3 text-2xl text-gray-500 hidden sm:block">→</div>
        <div>
          <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-1">{t('hasta')}</label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value as Currency)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
          >
            {Object.values(Currency).map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-50"
        >
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : <><i className="fas fa-exchange-alt mr-2"></i>{t('convertirBtn')}</>}
        </button>
      </form>
      {(conversionResult || isLoading) && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow text-center font-semibold text-lg text-gray-700 min-h-[56px] flex items-center justify-center">
          {isLoading ? <i className="fas fa-spinner fa-spin text-2xl text-indigo-600"></i> : conversionResult}
        </div>
      )}
    </section>
  );
};

export default CurrencyConverter;
