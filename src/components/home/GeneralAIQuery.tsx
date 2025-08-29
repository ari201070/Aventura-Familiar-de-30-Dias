import React, { useState } from 'react';
import { useAppContext } from '../../App.tsx';
import { askGemini } from '../../services/apiService.ts';

const GeneralAIQuery: React.FC = () => {
  const { t, language } = useAppContext();
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const sectionTitleClasses = "text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-indigo-500";
  const cardClasses = "bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300";

  const handleAskAi = async () => {
    if (aiQuestion.trim() === '') return;
    setIsAiLoading(true);
    setAiResponse('');
    try {
      const response = await askGemini(aiQuestion, language);
      setAiResponse(response);
    } catch (error) {
      setAiResponse(t('iaError'));
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
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
  );
};

export default GeneralAIQuery;
