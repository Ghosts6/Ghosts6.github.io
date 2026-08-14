import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

interface DarkModeToggleProps {
  displayText?: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ displayText = false }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      type="button"
      onClick={() => toggleDarkMode()}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-2xl text-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-transform duration-200 hover:scale-110 active:scale-95"
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