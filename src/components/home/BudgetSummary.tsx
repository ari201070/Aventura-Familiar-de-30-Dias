

import React from 'react';
import { useAppContext } from '../../App.tsx';
import { BudgetDetails } from '../../pages/HomePage.tsx';

interface BudgetSummaryProps {
  budgetDetails: BudgetDetails;
}

const getIconForConcept = (key: string): string => {
    if (key.includes('accommodation')) return 'fa-bed';
    if (key.includes('food')) return 'fa-utensils';
    if (key.includes('transport')) return 'fa-bus-alt';
    if (key.includes('activities')) return 'fa-hiking';
    if (key.includes('museums')) return 'fa-landmark';
    if (key.includes('flights')) return 'fa-plane-departure';
    return 'fa-dollar-sign';
};

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ budgetDetails }) => {
  const { t } = useAppContext();
  const { total, breakdown, isCalculating } = budgetDetails;
  const sectionTitleClasses = "text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500";
  const cardClasses = "bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300";

  const sortedBreakdown = Object.entries(breakdown).sort(([keyA], [keyB]) => {
    const isFlightA = keyA.includes('flight');
    const isFlightB = keyB.includes('flight');
    if (isFlightA && !isFlightB) return -1;
    if (!isFlightA && isFlightB) return 1;
    return t(keyA).localeCompare(t(keyB)); // Alphabetical sort for the rest
  });

  return (
    <section className={cardClasses}>
      <h2 className={`${sectionTitleClasses} flex items-center`}>
        <i className="fas fa-calculator mr-3 text-indigo-600"></i>
        {t('budget_summary_title')}
      </h2>
      <p className="text-gray-600 mb-4">{t('budget_summary_desc')}</p>
      <div className="bg-indigo-50 p-6 rounded-lg text-center">
        <p className="text-lg font-medium text-indigo-800 mb-2">{t('budget_summary_total_label')}</p>
        <p className="text-3xl sm:text-4xl font-bold text-indigo-600 tracking-tight flex items-center justify-center min-h-[48px]">
          {isCalculating ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            total
          )}
        </p>
      </div>
      
      {!isCalculating && Object.keys(breakdown).length > 0 && (
        <div className="mt-6 pt-4 border-t border-indigo-200">
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">{t('budget_summary_breakdown_title')}</h3>
            <div className="space-y-2 max-w-md mx-auto">
                {sortedBreakdown.map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                        <div className="flex items-center">
                            <i className={`fas ${getIconForConcept(key)} w-6 text-center text-indigo-500 mr-3`}></i>
                            <span className="text-sm font-medium text-gray-800">{t(key)}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">{value}</span>
                    </div>
                ))}
            </div>
        </div>
      )}
    </section>
  );
};

export default BudgetSummary;