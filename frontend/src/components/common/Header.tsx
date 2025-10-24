import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-2xl font-bold text-accent dark:text-dark-accent"
            >
              Github Page
            </Link>
            <span className="hidden md:block text-gray-500">|</span>
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="text-lg text-text dark:text-dark-text relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:dark:bg-dark-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-lg text-text dark:text-dark-text relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:dark:bg-dark-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://kiarashbashokian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent transition-all duration-200 hover:scale-110 active:scale-90"
            >
              <i className="fas fa-globe"></i>
            </a>
            <a
              href="https://ir.linkedin.com/in/kiarashbashokian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-text dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 active:scale-90"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Ghosts6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent transition-all duration-200 hover:scale-110 active:scale-90"
            >
              <i className="fab fa-github"></i>
            </a>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text dark:text-dark-text focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Slide from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary dark:bg-dark-primary shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-text dark:text-dark-text focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-8 mt-8">
          {["Home", "Projects", "Portfolio", "LinkedIn", "GitHub"].map(
            (item, index) => {
              const links = [
                "/",
                "/projects",
                "https://kiarashbashokian.com/",
                "https://ir.linkedin.com/in/kiarashbashokian",
                "https://github.com/Ghosts6",
              ];
              const isExternal = index > 1;

              const content = (
                <span className="relative group text-2xl text-text dark:text-dark-text transition-transform duration-200 hover:scale-110 active:scale-95">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-dark-accent transition-all duration-300 group-hover:w-full group-active:w-full"></span>
                </span>
              );

              return isExternal ? (
                <a
                  key={item}
                  href={links[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  {content}
                </a>
              ) : (
                <Link key={item} to={links[index]} onClick={toggleMenu}>
                  {content}
                </Link>
              );
            }
          )}

          <div className="border-t border-gray-300 dark:border-gray-600 w-3/4 my-4"></div>

          <div className="pt-4">
            <DarkModeToggle displayText={true} />
          </div>
        </nav>
      </div>

      {/* Darker Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
