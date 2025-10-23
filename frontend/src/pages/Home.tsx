import React from 'react';
import Socials from '../components/home/Socials';
import ImageSections from '../components/home/ImageSections';
import LeetCode from '../components/home/LeetCode';
import ProjectsSection from '../components/home/ProjectsSection';
import HeroContentSwitcher from '../components/sections/HeroContentSwitcher';
import MiniGameSection from '../components/home/MiniGameSection';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation(); 
  const [socialsRef, socialsVisible] = useScrollAnimation();
  const [imageSectionsRef, imageSectionsVisible] = useScrollAnimation();
  const [leetCodeRef, leetCodeVisible] = useScrollAnimation();
  const [miniGameRef, miniGameVisible] = useScrollAnimation();
  const [projectsSectionRef, projectsSectionRefVisible] = useScrollAnimation();

  return (
    <div className="text-text dark:text-dark-text">
      <div ref={heroRef} className={`transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <HeroContentSwitcher />
      </div>

      <div ref={socialsRef} className={`py-8 transition-all duration-700 ease-out ${socialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Socials />
      </div>

      <div ref={imageSectionsRef} className={`py-8 transition-all duration-700 ease-out ${imageSectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ImageSections />
      </div>

      <div ref={leetCodeRef} className={`py-8 transition-all duration-700 ease-out ${leetCodeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <LeetCode />
      </div>

      <div ref={miniGameRef} className={`py-8 transition-all duration-700 ease-out ${miniGameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <MiniGameSection />
      </div>

      <div ref={projectsSectionRef} className={`py-8 transition-all duration-700 ease-out ${projectsSectionRefVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;
