import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 
                  bg-gradient-to-tr from-accent to-accent-hover
                  text-white shadow-lg rounded-lg p-3 cursor-pointer z-50
                  hover:from-accent-hover hover:to-accent hover:shadow-xl 
                  active:scale-95
                  transition-all duration-300 ease-in-out
                  dark:from-dark-accent dark:to-dark-accent-hover
                  dark:hover:from-dark-accent-hover dark:hover:to-dark-accent
                  ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <img src="/static/icon/upArrow.svg" alt="Scroll to top" 
            className="w-6 h-6 mx-auto animate-bounce-up hover:animate-none transition-transform active:translate-y-[2px]" />
    </button>
  );
};

export default ScrollToTopButton;