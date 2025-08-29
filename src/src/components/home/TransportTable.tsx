import React from 'react';
import { useAppContext } from '../../App.tsx';
import { TransportLeg } from '../../types.ts';
import { TRANSPORT_DATA } from '../../constants.ts';

interface TransportTableProps {
  getConvertedPrice: (basePriceARS: number) => string;
}

const TransportTable: React.FC<TransportTableProps> = ({ getConvertedPrice }) => {
  const { t, language } = useAppContext();
  const sectionTitleClasses = "text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500";
  const cardClasses = "bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300";
  const tableCellClasses = `px-4 py-3 whitespace-nowrap text-sm`;

  return (
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
              const textAlignClass = language === 'he' ? 'text-right' : 'text-left';
              return (
                <tr key={leg.id} className="hover:bg-gray-50 transition-colors">
                  <td className={`${tableCellClasses} font-semibold text-gray-800 ${textAlignClass}`}>{t(leg.fromKey)}</td>
                  <td className={`${tableCellClasses} font-semibold text-gray-800 ${textAlignClass}`}>{t(leg.toKey)}</td>
                  <td className={`${tableCellClasses} text-gray-600 ${textAlignClass}`}>{t(leg.meanKey)}</td>
                  <td className={`${tableCellClasses} text-gray-600 ${textAlignClass}`}>{t(leg.timeKey)}</td>
                  <td className={`${tableCellClasses} text-gray-600 ${textAlignClass}`}>{getConvertedPrice(leg.basePriceARS)}</td>
                  <td className={`${tableCellClasses} text-gray-600 ${textAlignClass}`} dangerouslySetInnerHTML={{ __html: leg.company }}></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransportTable;
