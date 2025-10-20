import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => toggleDarkMode()}
      className="bg-transparent border-none cursor-pointer p-0 m-0 text-2xl text-text dark:text-dark-text focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <i className={`w-8 h-8 flex items-center justify-center fas ${isDarkMode ? 'fa-sun hover:text-sun-yellow' : 'fa-moon hover:text-moon-blue'}`}></i>
    </button>
  );
};

export default DarkModeToggle;