import React from 'react';
import Socials from '../components/Socials';
import ImageSections from '../components/ImageSections';
import LeetCode from '../components/LeetCode';
import ProjectsSection from '../components/ProjectsSection';
import HeroContentSwitcher from '../components/sections/HeroContentSwitcher';
import useScrollAnimation from '../hooks/useScrollAnimation'; // New import

const Home: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation(); // New ref for hero
  const [socialsRef, socialsVisible] = useScrollAnimation();
  const [imageSectionsRef, imageSectionsVisible] = useScrollAnimation();
  const [leetCodeRef, leetCodeVisible] = useScrollAnimation();
  const [projectsSectionRef, projectsSectionVisible] = useScrollAnimation();

  return (
    <div className="text-text dark:text-dark-text">
      <div ref={heroRef} className={`transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <HeroContentSwitcher />
      </div>

      <div ref={socialsRef} className={`max-w-5xl mx-auto px-4 py-8 transition-all duration-700 ease-out ${socialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Socials />
      </div>

      <div ref={imageSectionsRef} className={`max-w-5xl mx-auto px-4 py-8 transition-all duration-700 ease-out ${imageSectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ImageSections />
      </div>

      <div ref={leetCodeRef} className={`max-w-5xl mx-auto px-4 py-8 transition-all duration-700 ease-out ${leetCodeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <LeetCode />
      </div>

      <div ref={projectsSectionRef} className={`max-w-5xl mx-auto px-4 py-8 transition-all duration-700 ease-out ${projectsSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;