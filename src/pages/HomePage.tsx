
import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../App.tsx';
import CityCard from '../components/CityCard.tsx';
import InteractiveMap from '../components/InteractiveMap.tsx';
import { CITIES } from '../constants.ts';
import { Currency, BudgetItem } from '../types.ts';
import { getCachedExchangeRate } from '../services/apiService.ts';
import BudgetSummary from '../components/home/BudgetSummary.tsx';
import TransportTable from '../components/home/TransportTable.tsx';
import ItineraryAnalysis from '../components/home/ItineraryAnalysis.tsx';
import PackingList from '../components/home/PackingList.tsx';
import GeneralAIQuery from '../components/home/GeneralAIQuery.tsx';
import CurrencyConverter from '../components/home/CurrencyConverter.tsx';


// --- Helper Functions for Budget Calculation ---
const parseRange = (rangeStr: string): [number, number] => {
  if (!rangeStr || typeof rangeStr !== 'string') return [0, 0];
  const parts = rangeStr.split('-').map(s => parseFloat(s.trim()));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return [parts[0], parts[1]];
  }
  if (parts.length === 1 && !isNaN(parts[0])) {
    return [parts[0], parts[0]];
  }
  return [0, 0];
};

const getDaysFromDurationString = (durationStr: string): number => {
  if (!durationStr) return 0;
  
  let totalDays = 0;

  // This regex finds all occurrences of a number followed by "día", "días", or "ימים"
  const regex = /(\d+)\s*(días?|ימים)/g;
  const matches = durationStr.matchAll(regex);
  
  for (const match of matches) {
    totalDays += parseInt(match[1], 10);
  }

  // Handle Hebrew specific word for "two days" (יומיים), which doesn't have a digit.
  if (durationStr.includes('יומיים')) {
    totalDays += 2;
  }
  
  return totalDays;
};

export interface BudgetDetails {
  total: string;
  breakdown: Record<string, string>;
  isCalculating: boolean;
}

const HomePage: React.FC = () => {
  const { t, language, currency: globalCurrency } = useAppContext();

  // State and logic that needs to be shared or is at the page level
  const [transportRates, setTransportRates] = useState<Record<string, number | null>>({});
  const [budgetDetails, setBudgetDetails] = useState<BudgetDetails>({
    total: t('budget_summary_calculating'),
    breakdown: {},
    isCalculating: true,
  });


  // --- Transport Price Conversion Logic ---
  const updateTransportRates = useCallback(async () => {
    const newRates: Record<string, number | null> = {};
    if (globalCurrency !== Currency.ARS) {
        const rate = await getCachedExchangeRate(Currency.ARS, globalCurrency);
        newRates[globalCurrency] = rate;
    } else {
        newRates[Currency.ARS] = 1;
    }
    setTransportRates(newRates);
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
        return `${(basePriceARS * rate).toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} ${globalCurrency}`;
    }
    return t('loading');
  };
  
  // --- Trip Budget Calculation Logic ---
  const calculateTripBudget = useCallback(async () => {
    setBudgetDetails({
        total: t('budget_summary_calculating'),
        breakdown: {},
        isCalculating: true,
    });
    
    const totalsByCategory: Record<string, { min: number, max: number }> = {};
    const oneTimeCostsAdded = new Set<string>(); // To track one-time costs
    const savedBudgets = JSON.parse(localStorage.getItem('customBudgets') || '{}');

    for (const city of CITIES) {
        const durationStr = t(`${city.id}_dates_duration`);
        const days = getDaysFromDurationString(durationStr);
        const cityBudget = savedBudgets[city.id] || city.budgetItems;

        cityBudget.forEach((item: BudgetItem) => {
            if (!totalsByCategory[item.conceptKey]) {
                totalsByCategory[item.conceptKey] = { min: 0, max: 0 };
            }
            const [min, max] = parseRange(item.value);

            if (item.isPerDay) {
                totalsByCategory[item.conceptKey].min += min * days;
                totalsByCategory[item.conceptKey].max += max * days;
            } else {
                if (!oneTimeCostsAdded.has(item.conceptKey)) {
                    totalsByCategory[item.conceptKey].min += min;
                    totalsByCategory[item.conceptKey].max += max;
                    oneTimeCostsAdded.add(item.conceptKey);
                }
            }
        });
    }
    
    let totalMinUSD = 0;
    let totalMaxUSD = 0;
    Object.values(totalsByCategory).forEach(category => {
        totalMinUSD += category.min;
        totalMaxUSD += category.max;
    });

    const rate = await getCachedExchangeRate('USD', globalCurrency);

    if (rate !== null) {
        const formattedBreakdown: Record<string, string> = {};
        for (const conceptKey in totalsByCategory) {
            const { min, max } = totalsByCategory[conceptKey];
            const finalMin = min * rate;
            const finalMax = max * rate;
            formattedBreakdown[conceptKey] = `${finalMin.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', { maximumFractionDigits: 0 })} - ${finalMax.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', { maximumFractionDigits: 0 })}`;
        }
        
        const finalTotalMin = totalMinUSD * rate;
        const finalTotalMax = totalMaxUSD * rate;
        const formattedTotal = `${globalCurrency} ${finalTotalMin.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', { maximumFractionDigits: 0 })} - ${finalTotalMax.toLocaleString(language === 'he' ? 'he-IL' : 'es-AR', { maximumFractionDigits: 0 })}`;
        
        setBudgetDetails({
            total: formattedTotal,
            breakdown: formattedBreakdown,
            isCalculating: false,
        });

    } else {
        setBudgetDetails({
            total: t('error'),
            breakdown: {},
            isCalculating: false,
        });
    }

  }, [t, globalCurrency, language]);

  useEffect(() => {
    calculateTripBudget();
    const handleStorageChange = (event: StorageEvent | Event) => {
      // Listen for custom event trigger as well
      if ((event as StorageEvent).key === 'customBudgets' || event.type === 'storage') {
        calculateTripBudget();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [calculateTripBudget]);

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
      
      <BudgetSummary budgetDetails={budgetDetails} />

      {/* Interactive Map */}
      <section className={cardClasses}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500 flex items-center">
          <i className="fas fa-map-marked-alt mr-3 text-indigo-600"></i>
          {t('mapaInteractivoTitulo')}
        </h2>
        <p className="text-gray-600 mb-6">{t('mapaInteractivoBienvenida')}</p>
        <InteractiveMap cities={CITIES} />
      </section>
      
      <TransportTable getConvertedPrice={getConvertedPrice} />

      <ItineraryAnalysis />

      <PackingList />

      <GeneralAIQuery />
      
      <CurrencyConverter />
    </div>
  );
};

export default HomePage;