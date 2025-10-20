import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-accent dark:text-dark-accent">Github Page</Link>
          <span className="text-gray-500">|</span>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-lg text-text dark:text-dark-text relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:dark:bg-dark-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Home</Link>
            <Link to="/projects" className="text-lg text-text dark:text-dark-text relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:dark:bg-dark-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Projects</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://kiarashbashokian.com/" target="_blank" rel="noopener noreferrer" className="text-xl text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent transition-colors">
            <i className="fas fa-globe"></i>
          </a>
          <a href="https://ir.linkedin.com/in/kiarashbashokian" target="_blank" rel="noopener noreferrer" className="text-xl text-text dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Ghosts6" target="_blank" rel="noopener noreferrer" className="text-xl text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;