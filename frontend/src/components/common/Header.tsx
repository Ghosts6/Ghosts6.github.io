import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = (path: string) => {
    const active = location.pathname === path;
    return [
      "text-lg text-text dark:text-dark-text relative min-h-[44px] inline-flex items-center",
      "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:dark:bg-dark-accent after:origin-left after:transition-transform after:duration-300",
      active ? "after:scale-x-100 text-accent dark:text-dark-accent font-semibold" : "after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="font-display text-2xl font-bold text-accent dark:text-dark-accent min-h-[44px] inline-flex items-center"
            >
              Ghosts6
            </Link>
            <span className="hidden md:block text-gray-500" aria-hidden="true">|</span>
            <nav className="hidden md:flex items-center space-x-6" aria-label="Primary">
              <Link to="/" className={navLinkClass("/")}>
                Home
              </Link>
              <Link to="/projects" className={navLinkClass("/projects")}>
                Projects
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://kiarashbashokian.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio website"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-xl text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent transition-all duration-200 hover:scale-110 active:scale-90"
            >
              <i className="fas fa-globe" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kiarashbashokian/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-xl text-text dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 active:scale-90"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/Ghosts6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-xl text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent transition-all duration-200 hover:scale-110 active:scale-90"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <DarkModeToggle />
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-64 bg-primary dark:bg-dark-primary shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Close menu"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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

        <nav className="flex flex-col items-center space-y-6 mt-8" aria-label="Mobile">
          {[
            { label: "Home", href: "/", external: false },
            { label: "Projects", href: "/projects", external: false },
            { label: "Portfolio", href: "https://kiarashbashokian.com/", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kiarashbashokian/", external: true },
            { label: "GitHub", href: "https://github.com/Ghosts6", external: true },
          ].map((item) => {
            const content = (
              <span
                className={`relative group text-2xl min-h-[44px] inline-flex items-center transition-transform duration-200 hover:scale-110 active:scale-95 ${
                  !item.external && location.pathname === item.href
                    ? "text-accent dark:text-dark-accent font-semibold"
                    : "text-text dark:text-dark-text"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-dark-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            );

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                {content}
              </a>
            ) : (
              <Link key={item.label} to={item.href} onClick={toggleMenu}>
                {content}
              </Link>
            );
          })}

          <div className="border-t border-gray-300 dark:border-gray-600 w-3/4 my-4"></div>

          <div className="pt-4 min-h-[44px] flex items-center">
            <DarkModeToggle displayText={true} />
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;
