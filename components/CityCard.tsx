
import React from 'react';
import { Link } from 'react-router-dom';
import { City } from '../types';
import { useAppContext } from '../App';
import { DEFAULT_CITY_IMAGE } from '../constants';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const { t } = useAppContext();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_CITY_IMAGE;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img 
        className="w-full h-56 object-cover" 
        src={city.image} 
        alt={t(city.nameKey)} 
        onError={handleImageError}
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{t(city.nameKey)}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{t(city.descriptionKey)}</p>
        <Link
          to={`/city/${city.id}`}
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-150 text-sm"
        >
          {t('explore_btn')} <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;