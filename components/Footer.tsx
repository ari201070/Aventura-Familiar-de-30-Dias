
import React from 'react';
import { useAppContext } from '../App';

const Footer: React.FC = () => {
  const { t } = useAppContext();
  return (
    <footer className="bg-gray-800 text-white text-center p-6 shadow-inner mt-auto">
      <p>&copy; {new Date().getFullYear()} {t('footerText')}</p>
    </footer>
  );
};

export default Footer;