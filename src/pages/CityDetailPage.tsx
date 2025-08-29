
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAppContext } from '../App.tsx';
import { CITIES, DEFAULT_CITY_IMAGE, AI_PROMPT_CONFIGS, LANGUAGES } from '../constants.ts';
import InteractiveMap from '../components/InteractiveMap.tsx';
import BudgetTable from '../components/BudgetTable.tsx';
import { City, AIPromptContent, AIResponseType, Language } from '../types.ts';
import { parseMarkdownLinks, parseMarkdownTable } from '../utils/markdownParser.ts';
import { askGemini, findEventsWithGoogleSearch } from '../services/apiService.ts';

const CityDetailPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const { t, language } = useAppContext();

  const city = CITIES.find(c => c.id === cityId);

  const [aiResponses, setAiResponses] = useState<Record<string, AIResponseType | undefined>>({});
  const [aiLoadingStates, setAiLoadingStates] = useState<Record<string, boolean>>({});
  const [aiUserInputs, setAiUserInputs] = useState<Record<string, string>>({});
  const [eventsAiResponse, setEventsAiResponse] = useState<AIResponseType | null>(null);
  const [isEventsAiLoading, setIsEventsAiLoading] = useState(false);

  useEffect(() => {
    // Reset AI states ONLY when city changes, not on language change
    setAiResponses({});
    setAiLoadingStates({});
    setAiUserInputs({});
    setEventsAiResponse(null);
    setIsEventsAiLoading(false);
  }, [cityId]);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_CITY_IMAGE;
  };
  
  const detailCardClasses = "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out";
  const detailSectionTitleClasses = "text-2xl font-bold text-indigo-700 mb-4 pb-2 border-b border-indigo-200 flex items-center";
  const detailTextClasses = "text-gray-700 leading-relaxed";

  const constructFullPrompt = (basePromptKey: string, cityForPrompt: City, userInput: string) => {
    let promptText = t(basePromptKey, { cityName: t(cityForPrompt.nameKey) });
    // Fallback if city-specific prompt is not found
    if (promptText === basePromptKey) {
        const genericPromptKey = `generic${basePromptKey.substring(cityForPrompt.id.length)}`;
        promptText = t(genericPromptKey, { cityName: t(cityForPrompt.nameKey) });
         if (promptText === genericPromptKey) {
            console.error(`AI Prompt not found for key: ${basePromptKey} or ${genericPromptKey}`);
            return null;
         }
    }
    return `${promptText} ${userInput}`.trim();
  };

  const handleGenerateAiContent = async (config: AIPromptContent, cityForPrompt: City, targetLang: Language) => {
    const userInput = aiUserInputs[config.promptKeySuffix] || "";
    const basePromptKey = `${cityForPrompt.id}${config.promptKeySuffix}`;
    const fullPrompt = constructFullPrompt(basePromptKey, cityForPrompt, userInput);

    if (!fullPrompt) {
      setAiResponses(prev => ({ 
        ...prev, 
        [config.promptKeySuffix]: { 
          text: t('iaError') + " (Prompt missing)", 
          lang: targetLang, 
          originalBasePromptKey: basePromptKey, 
          originalUserInput: userInput 
        } 
      }));
      return;
    }

    setAiLoadingStates(prev => ({ ...prev, [config.promptKeySuffix]: true }));
    setAiResponses(prev => ({ 
      ...prev, 
      [config.promptKeySuffix]: { 
        text: t('generating') + '...', 
        lang: targetLang, 
        originalBasePromptKey: basePromptKey, 
        originalUserInput: userInput 
      } 
    }));

    try {
      const responseText = await askGemini(fullPrompt, targetLang);
      setAiResponses(prev => ({ 
        ...prev, 
        [config.promptKeySuffix]: { 
          text: responseText, 
          lang: targetLang, 
          originalBasePromptKey: basePromptKey, 
          originalUserInput: userInput 
        } 
      }));
    } catch (error) {
      setAiResponses(prev => ({ 
        ...prev, 
        [config.promptKeySuffix]: { 
          text: t('iaError'), 
          lang: targetLang, 
          originalBasePromptKey: basePromptKey, 
          originalUserInput: userInput 
        } 
      }));
    } finally {
      setAiLoadingStates(prev => ({ ...prev, [config.promptKeySuffix]: false }));
    }
  };

  const handleTranslateAiResponse = async (config: AIPromptContent, cityForPrompt: City) => {
    const existingResponse = aiResponses[config.promptKeySuffix];
    if (!existingResponse) return;

    const { originalBasePromptKey, originalUserInput } = existingResponse;
    const fullPrompt = constructFullPrompt(originalBasePromptKey, cityForPrompt, originalUserInput);

    if (!fullPrompt) {
        // This case should ideally not happen if original prompt was valid
        setAiResponses(prev => ({ 
        ...prev, 
        [config.promptKeySuffix]: { 
            ...existingResponse, 
            text: t('iaError') + " (Original prompt error for translation)", 
            lang: language 
        } 
        }));
        return;
    }
    
    setAiLoadingStates(prev => ({ ...prev, [config.promptKeySuffix]: true }));
    
    try {
      const translatedText = await askGemini(fullPrompt, language); // language is the current UI language
      setAiResponses(prev => ({ 
        ...prev, 
        [config.promptKeySuffix]: { 
          text: translatedText, 
          lang: language, 
          originalBasePromptKey, 
          originalUserInput 
        } 
      }));
    } catch (error) {
      setAiResponses(prev => ({ 
        ...prev, 
        [config.promptKeySuffix]: { 
            ...existingResponse, // Revert to showing old text or show specific error
            text: existingResponse.text + `\n\n(${t('iaError')} - Translation failed)`, // Append error to old text
        } 
      }));
    } finally {
      setAiLoadingStates(prev => ({ ...prev, [config.promptKeySuffix]: false }));
    }
  };
  
  const handleFindEvents = async () => {
    setIsEventsAiLoading(true);
    setEventsAiResponse(null);

    const durationText = t(`${city.id}_dates_duration`);
    const dates = durationText.split('\n')[0].replace(/- \*\*Estadía\*\*:\s*/, '').trim();

    const prompt = `Find family-friendly events, festivals, or local markets in ${t(city.nameKey)}, Argentina that are happening during these dates: ${dates}. Focus on events that would be interesting for a family with children.`;
    
    try {
        const { text, sources } = await findEventsWithGoogleSearch(prompt, language);
        setEventsAiResponse({
            text: text || t('ai_event_finder_error'),
            sources: sources,
            lang: language,
            originalBasePromptKey: '', // Not needed for this specific feature
            originalUserInput: ''
        });
    } catch (error) {
        setEventsAiResponse({
            text: t('ai_event_finder_error'),
            lang: language,
            originalBasePromptKey: '',
            originalUserInput: ''
        });
    } finally {
        setIsEventsAiLoading(false);
    }
  };


  const renderSection = (titleKeySuffix: string, contentKey: string, iconClass: string) => {
    const title = t(`section_title_${titleKeySuffix}`);
    let content = t(contentKey);
    
    if (!content || content === contentKey) return null;

    let contentNode: React.ReactNode;

    if (content.trim().startsWith('- ')) {
      const listItems = content.split('\n').filter(item => item.trim().startsWith('- '));
      contentNode = (
        <ul className="list-disc list-inside space-y-1">
          {listItems.map((item, index) => (
            <li key={index} className={detailTextClasses}>
              {parseMarkdownLinks(item.substring(2))}
            </li>
          ))}
        </ul>
      );
    } else if (titleKeySuffix === 'gastronomy_highlight') {
      const sections = content.split(/\n###\s*(.+?)\n/); 
      contentNode = sections.reduce<React.ReactNode[]>((acc, part, index) => {
        if (index % 2 === 1) { 
          const subtitleKey = part.toLowerCase().includes(t('gastronomy_restaurants_subtitle').toLowerCase().split(' ')[0]) ? 'gastronomy_restaurants_subtitle' : 
                              part.toLowerCase().includes(t('gastronomy_cafes_subtitle').toLowerCase().split(' ')[0]) ? 'gastronomy_cafes_subtitle' : '';
          if (subtitleKey) {
            acc.push(<h3 key={`sub-${index}`} className="text-xl font-semibold text-gray-800 mt-4 mb-2">{t(subtitleKey)}</h3>);
          }
        } else if (part.trim().startsWith('|')) { 
          acc.push(<div key={`table-${index}`}>{parseMarkdownTable(part, (k) => t(k), language)}</div>);
        } else if (part.trim()) { 
          acc.push(<p key={`text-${index}`} className={`${detailTextClasses} mb-3 whitespace-pre-line`}>{part}</p>);
        }
        return acc;
      }, []);
    } else {
      contentNode = <p className={`${detailTextClasses} whitespace-pre-line`}>{content}</p>;
    }

    return (
      <section className={detailCardClasses}>
        <h2 className={detailSectionTitleClasses}>
          <i className={`fas ${iconClass} mr-3 text-xl text-indigo-500`}></i>
          {title}
        </h2>
        {contentNode}
      </section>
    );
  };
  
  const renderLinkSection = (titleKeySuffix: string, textKeySuffix: string, urlKeySuffix: string, iconClass: string) => {
    const title = t(`section_title_${titleKeySuffix}`);
    const linkText = t(`${city.id}_${textKeySuffix}`);
    const linkUrl = t(`${city.id}_${urlKeySuffix}`);
    const mainTextContentKey = `${city.id}_${titleKeySuffix.toLowerCase()}_text`;
    const mainTextContent = t(mainTextContentKey);
    
    const isMainTextValid = mainTextContent && mainTextContent !== mainTextContentKey;
    const isLinkTextValid = linkText && linkText !== `${city.id}_${textKeySuffix}`;
    const isLinkUrlValid = linkUrl && linkUrl !== `${city.id}_${urlKeySuffix}`;

    if (!isMainTextValid && !isLinkUrlValid) {
      return null;
    }
    
    const displayText = isLinkTextValid ? linkText : t('explore_btn');

    return (
      <section className={detailCardClasses}>
        <h2 className={detailSectionTitleClasses}>
          <i className={`fas ${iconClass} mr-3 text-xl text-indigo-500`}></i>
          {title}
        </h2>
        {isMainTextValid && (
             <p className={`${detailTextClasses} mb-4 whitespace-pre-line`}>{mainTextContent}</p>
        )}
        {isLinkUrlValid && (
            <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-150 text-sm"
            >
            {displayText} <i className="fas fa-external-link-alt ml-1"></i>
            </a>
        )}
      </section>
    );
  };

  return (
    <div className="space-y-10">
      <header className="text-center py-10 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl shadow-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {t(city.nameKey)}
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <section className={detailCardClasses}>
            <img 
              src={city.image} 
              alt={t(city.nameKey)} 
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md mb-6"
              onError={handleImageError}
            />
            <p className={`${detailTextClasses} text-lg whitespace-pre-line`}>{t(city.descriptionKey)}</p>
          </section>

          {renderSection('dates_duration', `${city.id}_dates_duration`, 'fa-calendar-alt')}
          {renderSection('must_see', `${city.id}_must_see`, 'fa-star')}
          {renderSection('activities_recommended', city.activitiesKey, 'fa-hiking')}

          {/* AI Event Finder Section */}
          <section className={detailCardClasses}>
            <h2 className={detailSectionTitleClasses}>
              <i className={`fas fa-calendar-star mr-3 text-xl text-indigo-500`}></i>
              {t('section_title_ai_event_finder')}
            </h2>
            <p className={`${detailTextClasses} mb-4`}>
              {t('ai_event_finder_description', { cityName: t(city.nameKey) })}
            </p>
            <button
              onClick={handleFindEvents}
              disabled={isEventsAiLoading}
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center mb-3"
            >
              {isEventsAiLoading ? (
                <><i className="fas fa-spinner fa-spin mr-2"></i> {t('generating')}</>
              ) : (
                <><i className="fas fa-search-location mr-2"></i> {t('ai_event_finder_button')}</>
              )}
            </button>
            {eventsAiResponse && (
              <div className="mt-5 p-4 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
                <div className="whitespace-pre-line text-gray-700">{eventsAiResponse.text}</div>
                {eventsAiResponse.sources && eventsAiResponse.sources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">{t('ai_event_finder_sources_title')}</h4>
                    <ul className="space-y-1">
                      {eventsAiResponse.sources.map((source, index) => (
                        source.web && (
                          <li key={index} className="text-xs">
                            <a href={source.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                              <i className="fas fa-link fa-xs mr-1.5"></i>
                              {source.web.title || source.web.uri}
                            </a>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>

          {renderSection('gastronomy_highlight', `${city.id}_gastronomy_highlight`, 'fa-utensils')}
          {renderSection('accommodation_examples', city.accommodationKey, 'fa-bed')}
          {renderSection('coordinates', `${city.id}_coordinates`, 'fa-map-pin')}
          {renderSection('family_tips', `${city.id}_family_tips`, 'fa-users')}
          {renderSection('cultural_tips', `${city.id}_cultural_tips`, 'fa-landmark')}
          
          <section className={detailCardClasses}>
             <h2 className={detailSectionTitleClasses}>
                <i className={`fas fa-wallet mr-3 text-xl text-indigo-500`}></i>
                {t('section_title_budget_table')}
             </h2>
             <BudgetTable cityId={city.id} defaultBudgetItems={city.budgetItems} />
          </section>

          {renderLinkSection('city_map', 'map_link_text', 'map_link_url', 'fa-map')}

          {/* AI Generator Sections */}
          {AI_PROMPT_CONFIGS.map(config => {
            const currentResponse = aiResponses[config.promptKeySuffix];
            return (
              <section key={config.promptKeySuffix} className={detailCardClasses}>
                <h2 className={detailSectionTitleClasses}>
                  <i className={`fas ${config.icon} mr-3 text-xl text-indigo-500`}></i>
                  {t(config.titleKey)}
                </h2>
                <p className={`${detailTextClasses} mb-4`}>
                  {t(config.descriptionKey, { cityName: t(city.nameKey) })}
                </p>
                <textarea
                  value={aiUserInputs[config.promptKeySuffix] || ''}
                  onChange={(e) => setAiUserInputs(prev => ({ ...prev, [config.promptKeySuffix]: e.target.value }))}
                  placeholder={t(config.userInputPlaceholderKey)}
                  rows={3}
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={aiLoadingStates[config.promptKeySuffix]}
                />
                <button
                  onClick={() => handleGenerateAiContent(config, city, language)}
                  disabled={aiLoadingStates[config.promptKeySuffix]}
                  className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center mb-3"
                >
                  {aiLoadingStates[config.promptKeySuffix] && currentResponse?.lang === language ? ( // Show loading only if generating for current language
                    <><i className="fas fa-spinner fa-spin mr-2"></i> {t('generating')}</>
                  ) : (
                    <>{t(config.buttonKey)}</>
                  )}
                </button>
                
                {currentResponse && (
                  <div className="mt-5 p-4 bg-gray-50 rounded-lg shadow-inner whitespace-pre-line text-gray-700 border border-gray-200">
                    {currentResponse.text}
                    {currentResponse.lang !== language && !aiLoadingStates[config.promptKeySuffix] && (
                      <button
                        onClick={() => handleTranslateAiResponse(config, city)}
                        className="mt-3 w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors text-sm"
                      >
                        <i className="fas fa-language mr-2"></i>
                        {t('ai_translate_button_text', { lang: LANGUAGES.find(l => l.code === language)?.name || language })}
                      </button>
                    )}
                     {aiLoadingStates[config.promptKeySuffix] && currentResponse?.lang !== language && ( // Loading indicator for translation
                        <div className="mt-2 text-sm text-gray-500"><i className="fas fa-spinner fa-spin mr-1"></i> {t('generating')} {LANGUAGES.find(l=>l.code === language)?.name}...</div>
                    )}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <aside className="lg:col-span-1 space-y-8 sticky top-24">
           <section className={detailCardClasses}>
            <h2 className={detailSectionTitleClasses}>
                <i className={`fas fa-map-marked-alt mr-3 text-xl text-indigo-500`}></i>
                {t('mapaInteractivoTitulo')}
            </h2>
            <InteractiveMap 
              cities={[city]} 
              selectedCityCoords={city.coords} 
              pointsOfInterest={city.pointsOfInterest}
              zoomLevel={13} 
            />
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CityDetailPage;
