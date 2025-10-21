import React, { useState, useEffect, useRef } from 'react';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import WorkExperienceSection from './WorkExperienceSection';
import TechStack from '../../components/home/TechStack';

type SectionKey = 'about' | 'education' | 'experience' | 'skills';

const HeroContentSwitcher: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('about');

  // Refs for tab buttons to measure their position and width
  const aboutBtnRef = useRef<HTMLButtonElement>(null);
  const educationBtnRef = useRef<HTMLButtonElement>(null);
  const experienceBtnRef = useRef<HTMLButtonElement>(null);
  const skillsBtnRef = useRef<HTMLButtonElement>(null);

  // State for the sliding indicator
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: string; width: string }>({ left: '0px', width: '0px' });

  // Effect to update indicator position and width
  useEffect(() => {
    const updateIndicator = () => {
      const activeBtnRef =
        activeSection === 'about' ? aboutBtnRef :
        activeSection === 'education' ? educationBtnRef :
        activeSection === 'experience' ? experienceBtnRef :
        skillsBtnRef;

      if (activeBtnRef.current) {
        setIndicatorStyle({
          left: `${activeBtnRef.current.offsetLeft}px`,
          width: `${activeBtnRef.current.offsetWidth}px`,
        });
      }
    };

    // Update indicator on mount and when activeSection changes
    updateIndicator();
    // Also update on window resize to handle responsiveness
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const renderSectionContent = (section: SectionKey) => {
    switch (section) {
      case 'about': return <AboutSection />;
      case 'education': return <EducationSection />;
      case 'experience': return <WorkExperienceSection />;
      case 'skills': return (
        <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">🛠️ Skills & Technologies</h3>
          <TechStack />
        </div>
      );
      default: return <AboutSection />;
    }
  };

  const getButtonClasses = (section: SectionKey) => (
    `flex-1 px-4 py-3 text-lg font-semibold transition-colors duration-300 relative z-10
    ${activeSection === section
      ? 'text-accent dark:text-dark-accent' // Active tab text color
      : 'text-text dark:text-dark-text hover:text-accent dark:hover:text-dark-accent hover:bg-gray-100 dark:hover:bg-gray-800' // Inactive tab styling
    }`
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-16"> {/* Outermost div */}
      <div className="text-center mb-12"> {/* Title and subtitle */}
        <h1 className="text-4xl md:text-6xl font-bold text-accent dark:text-dark-accent">Hey there! 👋 I'm Kiarash</h1>
        <p className="mt-4 text-lg md:text-xl text-text dark:text-dark-text">A passionate Computer Science student with a love for web development.</p>
      </div>

      <div className="max-w-5xl mx-auto bg-secondary dark:bg-dark-secondary rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"> {/* This is the card that contains tabs and content */}
        <div className="relative flex justify-center rounded-t-lg overflow-hidden border-b border-gray-300 dark:border-gray-600">
          {/* Sliding indicator */}
          <div
            className="absolute bottom-0 h-1 bg-accent dark:bg-dark-accent transition-all duration-300 ease-in-out"
            style={indicatorStyle}
          ></div>
          <button ref={aboutBtnRef} onClick={() => setActiveSection('about')} className={getButtonClasses('about')}>About</button>
          <button ref={educationBtnRef} onClick={() => setActiveSection('education')} className={getButtonClasses('education')}>Education</button>
          <button ref={experienceBtnRef} onClick={() => setActiveSection('experience')} className={getButtonClasses('experience')}>Experience</button>
          <button ref={skillsBtnRef} onClick={() => setActiveSection('skills')} className={getButtonClasses('skills')}>Skills</button>
        </div>
        <div className="p-6">
          {renderSectionContent(activeSection)}
        </div>
      </div>
    </div>
  );
};

export default HeroContentSwitcher;
