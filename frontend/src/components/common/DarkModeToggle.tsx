import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

interface DarkModeToggleProps {
  displayText?: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ displayText = false }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => toggleDarkMode()}
      className="bg-transparent border-none cursor-pointer p-0 m-0 text-2xl text-text dark:text-dark-text focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      {displayText ? (
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      ) : (
        <i className={`w-8 h-8 flex items-center justify-center fas ${isDarkMode ? 'fa-sun hover:text-sun-yellow' : 'fa-moon hover:text-moon-blue'}`}></i>
      )}
    </button>
  );
};

export default DarkModeToggle;