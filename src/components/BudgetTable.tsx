import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../App.tsx';
import { BudgetItem } from '../types.ts';

interface BudgetTableProps {
  cityId: string;
  defaultBudgetItems: BudgetItem[];
}

const BudgetTable: React.FC<BudgetTableProps> = ({ cityId, defaultBudgetItems }) => {
  const { t, language } = useAppContext();
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState('');

  const loadBudget = useCallback(() => {
    try {
      const savedBudgets = JSON.parse(localStorage.getItem('customBudgets') || '{}');
      if (savedBudgets[cityId]) {
        setBudgetItems(savedBudgets[cityId]);
      } else {
        setBudgetItems(defaultBudgetItems);
      }
    } catch (e) {
      console.error("Failed to load or parse budget from localStorage", e);
      setBudgetItems(defaultBudgetItems);
    }
  }, [cityId, defaultBudgetItems]);
  
  useEffect(() => {
    loadBudget();
  }, [loadBudget]);
  
  const handleEdit = (index: number, value: string) => {
    setEditingIndex(index);
    setEditingValue(value);
  };

  const handleSave = (index: number) => {
    if (editingIndex === null) return;

    // Basic validation to ensure format is number or number-number
    if (!/^\d+(\s*-\s*\d+)?$/.test(editingValue.trim())) {
      setEditingIndex(null); // Just cancel edit on invalid format
      return;
    }

    const updatedItems = [...budgetItems];
    updatedItems[index].value = editingValue.trim().replace(/\s*-\s*/, '-');
    setBudgetItems(updatedItems);

    try {
        const savedBudgets = JSON.parse(localStorage.getItem('customBudgets') || '{}');
        savedBudgets[cityId] = updatedItems;
        localStorage.setItem('customBudgets', JSON.stringify(savedBudgets));
        // Trigger a custom event that HomePage can listen to
        window.dispatchEvent(new Event('storage'));
    } catch (e) {
        console.error("Failed to save budget to localStorage", e);
    }
    
    setEditingIndex(null);
  };

  const handleRestoreDefaults = () => {
    try {
        const savedBudgets = JSON.parse(localStorage.getItem('customBudgets') || '{}');
        delete savedBudgets[cityId];
        localStorage.setItem('customBudgets', JSON.stringify(savedBudgets));
        setBudgetItems(defaultBudgetItems);
        // Trigger storage event for homepage summary to update
        window.dispatchEvent(new Event('storage'));
    } catch(e) {
        console.error("Failed to restore budget in localStorage", e);
    }
  };

  return (
    <div className="overflow-x-auto my-4">
        <div className="flex justify-end mb-3">
            <button 
                onClick={handleRestoreDefaults}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 text-xs rounded-lg shadow-sm transition-colors"
            >
                <i className="fas fa-undo mr-2"></i>
                {t('budget_table_restore_defaults')}
            </button>
        </div>
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-indigo-50">
          <tr>
            <th scope="col" className={`px-4 py-3 ${language === 'he' ? 'text-right' : 'text-left'} text-sm font-semibold text-indigo-700`}>
              {t('budget_table_concept')}
            </th>
            <th scope="col" className="px-4 py-3 text-center text-sm font-semibold text-indigo-700">
              {t('budget_table_estimated_price_usd')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {budgetItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors group">
              <td className={`px-4 py-3 whitespace-nowrap text-sm text-gray-800 font-medium ${language === 'he' ? 'text-right' : 'text-left'}`}>
                {t(item.conceptKey)}
              </td>
              <td 
                className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 text-center cursor-pointer"
                onClick={() => handleEdit(index, item.value)}
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    onBlur={() => handleSave(index)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave(index)}
                    autoFocus
                    className="w-24 text-center border border-indigo-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                ) : (
                  <>
                    <i className="fas fa-dollar-sign text-gray-400 mr-1.5"></i>
                    {item.value}
                    <i className="fas fa-pencil-alt text-gray-300 ml-3 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;