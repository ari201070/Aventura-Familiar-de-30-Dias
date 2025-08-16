import React from 'react';
import { useAppContext } from '../../App.tsx';

interface BudgetSummaryProps {
  tripBudget: string;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ tripBudget }) => {
  const { t } = useAppContext();
  const isCalculating = tripBudget === t('budget_summary_calculating');
  const sectionTitleClasses = "text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500";
  const cardClasses = "bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300";

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
            tripBudget
          )}
        </p>
      </div>
    </section>
  );
};

export default BudgetSummary;
