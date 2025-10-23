import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-dark-primary shadow-md mt-8">
      <div className="container mx-auto px-4 py-6 text-text dark:text-dark-text">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; 2025 Kiarash Bashokian. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="mailto:kiarash@kiarashbashokian.com" className="hover:text-accent dark:hover:text-dark-accent flex items-center">
              <i className="fas fa-envelope"></i>
              <span className="ml-2">kiarash@kiarashbashokian.com</span>
            </a>
            <a href="https://github.com/ghosts6" target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-dark-accent flex items-center">
              <i className="fab fa-github"></i>
              <span className="ml-2">ghosts6</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;