
import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../App';
import CityCard from '../components/CityCard';
import InteractiveMap from '../components/InteractiveMap';
import { CITIES, TRANSPORT_DATA } from '../constants';
import { PackingItem, Currency, TransportLeg } from '../types';
import { askGemini, convertCurrency as fetchConvertedCurrency, getCachedExchangeRate } from '../services/apiService'; // Renamed to avoid conflict
import { v4 as uuidv4 } from 'uuid'; // For unique IDs

const HomePage: React.FC = () => {
  const { t, language, currency: globalCurrency } = useAppContext();

  // Packing List State
  const [packingItems, setPackingItems] = useState<PackingItem[]>(() => {
    const savedItems = localStorage.getItem('packingList');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [newItemText, setNewItemText] = useState('');
  const [newItemType, setNewItemType] = useState<'essential' | 'optional'>('essential');

  useEffect(() => {
    localStorage.setItem('packingList', JSON.stringify(packingItems));
  }, [packingItems]);

  const handleAddPackingItem = () => {
    if (newItemText.trim() === '') return;
    const newItem: PackingItem = {
      id: uuidv4(),
      text: newItemText.trim(),
      type: newItemType,
      originalLang: language, // Store original language
    };
    setPackingItems(prev => [...prev, newItem]);
    setNewItemText('');
  };

  const handleRemovePackingItem = (id: string) => {
    setPackingItems(prev => prev.filter(item => item.id !== id));
  };

  // AI Consultation State
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleAskAi = async () => {
    if (aiQuestion.trim() === '') return;
    setIsAiLoading(true);
    setAiResponse(t('iaProcessing'));
    try {
      const response = await askGemini(aiQuestion, language);
      setAiResponse(response);
    } catch (error) {
      setAiResponse(t('iaError'));
    } finally {
      setIsAiLoading(false);
    }
  };

  // Currency Converter State
  const [amountToConvert, setAmountToConvert] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<Currency>(Currency.ARS);
  const [toCurrency, setToCurrency] = useState<Currency>(Currency.USD);
  const [conversionResult, setConversionResult] = useState<string>('');

  const handleCurrencyConversion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amountToConvert || parseFloat(amountToConvert) <= 0) {
      setConversionResult(t('error') + ': ' + (language === 'he' ? 'הזן סכום חוקי' : 'Enter a valid amount'));
      return;
    }
    setConversionResult(t('loading') + '...');
    const numericAmount = parseFloat(amountToConvert);
    const result = await fetchConvertedCurrency(numericAmount, fromCurrency, toCurrency);
    if (result !== null) {
      setConversionResult(`${numericAmount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`);
    } else {
      setConversionResult(t('error') + ': ' + (language === 'he' ? 'לא ניתן היה לבצע המרה' : 'Conversion failed'));
    }
  };

  // Transport Table Price Conversion
  const [transportRates, setTransportRates] = useState<Record<string, number | null>>({});

  const updateTransportRates = useCallback(async () => {
    const newRates: Record<string, number | null> = {};
    if (globalCurrency !== Currency.ARS) {
        const rate = await getCachedExchangeRate(Currency.ARS, globalCurrency);
        newRates[globalCurrency] = rate;
    } else {
        newRates[Currency.ARS] = 1; // Base is ARS
    }
    setTransportRates(newRates);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalCurrency]);

  useEffect(() => {
    updateTransportRates();
  }, [updateTransportRates]);

  const getConvertedPrice = (basePriceARS: number) => {
    if (globalCurrency === Currency.ARS) {
        return t('transport_price_ars_generic', {price: basePriceARS.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR')});
    }
    const rate = transportRates[globalCurrency];
    if (rate !== null && rate !== undefined) {
        // Use a generic key for converted prices as well, or specify currency in key if needed
        return `${(basePriceARS * rate).toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${globalCurrency}`;
    }
    return t('loading');
  };


  const sectionTitleClasses = "text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500";
  const cardClasses = "bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300";

  return (
    <div className="space-y-12">
      <section className="text-center py-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{t('tituloPrincipal')}</h1>
        <p className="text-lg text-indigo-100">{t('bienvenidaPrincipal')}</p>
      </section>

      {/* City Cards */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CITIES.map(city => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <section className={cardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}><i className="fas fa-map-marked-alt mr-3 text-indigo-600"></i>{t('mapaInteractivoTitulo')}</h2>
        <p className="text-gray-600 mb-6">{t('mapaInteractivoBienvenida')}</p>
        <InteractiveMap cities={CITIES} />
      </section>
      
      {/* Transport Table */}
      <section className={cardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}><i className="fas fa-bus mr-3 text-indigo-600"></i>{t('transporte')}</h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full">
            <thead className="bg-indigo-100">
              <tr>
                {['desde', 'hasta', 'medio', 'tiempo', 'precio', 'compania'].map(headerKey => (
                  <th key={headerKey} scope="col" 
                      className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider ${language === 'he' ? 'text-right' : 'text-left'} text-indigo-700`}>
                    {t(headerKey)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {TRANSPORT_DATA.map((leg: TransportLeg) => {
                return (
                  <tr key={leg.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800">{t(leg.fromKey)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800">{t(leg.toKey)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{t(leg.meanKey)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{t(leg.timeKey)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">{getConvertedPrice(leg.basePriceARS)}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: leg.company }}></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Itinerary Program Section */}
      <section className={cardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}><i className="fas fa-clipboard-list mr-3 text-indigo-600"></i>{t('itinerary_program_title')}</h2>
        
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">{t('itinerary_program_current_plan_title')}</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
                {CITIES.map(city => {
                    const durationText = t(`${city.id}_dates_duration`);
                    const simplifiedDuration = durationText !== `${city.id}_dates_duration` 
                        ? durationText.split('\n')[0].replace(/.*Estadía\s*:\s*/i, '').replace(/\*\*Estadía\*\*:\s*/i,'').trim() 
                        : t('duration_not_specified');
                    return (
                        <li key={city.id} className="text-gray-700">
                            <span className="font-medium text-gray-900">{t(city.nameKey)}:</span> {simplifiedDuration}
                        </li>
                    );
                })}
            </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">{t('itinerary_program_optimization_tips_title')}</h3>
            <ul className="list-disc list-inside space-y-2 pl-5">
                {[1, 2, 3, 4, 5, 6].map(tipNum => (
                    <li key={tipNum} className="text-gray-700">{t(`itinerary_optimization_tip_${tipNum}`)}</li>
                ))}
            </ul>
        </div>
      </section>

      {/* Packing List */}
      <section className={cardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}><i className="fas fa-suitcase-rolling mr-3 text-indigo-600"></i>{t('packing_title')}</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
          <input
            type="text"
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder={t('packing_placeholder')}
            className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <select
            value={newItemType}
            onChange={(e) => setNewItemType(e.target.value as 'essential' | 'optional')}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
          >
            <option value="essential">{t('packing_essential')}</option>
            <option value="optional">{t('packing_optional')}</option>
          </select>
          <button
            onClick={handleAddPackingItem}
            className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <i className="fas fa-plus mr-2"></i>{t('packing_add')}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-3">{t('packing_essential')}</h4>
            <ul className="space-y-2">
              {packingItems.filter(item => item.type === 'essential').map(item => (
                <li key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm">
                  <span className="text-gray-800">{item.text}</span>
                  <button onClick={() => handleRemovePackingItem(item.id)} className="text-red-500 hover:text-red-700">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-3">{t('packing_optional')}</h4>
            <ul className="space-y-2">
              {packingItems.filter(item => item.type === 'optional').map(item => (
                <li key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm">
                  <span className="text-gray-800">{item.text}</span>
                  <button onClick={() => handleRemovePackingItem(item.id)} className="text-red-500 hover:text-red-700">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AI Consultation */}
      <section className={cardClasses}>
        <h2 className={`${sectionTitleClasses} flex items-center`}><i className="fas fa-robot mr-3 text-indigo-600"></i>{t('iaTitulo')}</h2>
        <textarea
          value={aiQuestion}
          onChange={(e) => setAiQuestion(e.target.value)}
          placeholder={t('iaPlaceholder')}
          rows={4}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          disabled={isAiLoading}
        />
        <button
          onClick={handleAskAi}
          disabled={isAiLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAiLoading ? <><i className="fas fa-spinner fa-spin mr-2"></i>{t('iaProcessing')}</> : <><i className="fas fa-paper-plane mr-2"></i>{t('consultarBtn')}</>}
        </button>
        {aiResponse && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow whitespace-pre-wrap text-gray-700">
            {aiResponse}
          </div>
        )}
      </section>

      {/* Currency Converter */}
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
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <i className="fas fa-exchange-alt mr-2"></i>{t('convertirBtn')}
          </button>
        </form>
        {conversionResult && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow text-center font-semibold text-lg text-gray-700">
            {conversionResult}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
