import React, { Suspense, lazy } from 'react';
import HeroContentSwitcher from '../components/sections/HeroContentSwitcher';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Socials = lazy(() => import('../components/home/Socials'));
const ImageSections = lazy(() => import('../components/home/ImageSections'));
const LeetCode = lazy(() => import('../components/home/LeetCode'));
const MiniGameSection = lazy(() => import('../components/home/MiniGameSection'));
const ProjectsSection = lazy(() => import('../components/home/ProjectsSection'));

const SectionFallback: React.FC = () => (
  <div className="py-8 flex justify-center" role="status" aria-live="polite">
    <div className="loader-inner" aria-hidden="true" />
    <span className="sr-only">Loading section…</span>
  </div>
);

const animatedClass = (visible: boolean) =>
  `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 motion-reduce:opacity-100 motion-reduce:translate-y-0'
  }`;

const Home: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [socialsRef, socialsVisible] = useScrollAnimation();
  const [imageSectionsRef, imageSectionsVisible] = useScrollAnimation();
  const [leetCodeRef, leetCodeVisible] = useScrollAnimation();
  const [miniGameRef, miniGameVisible] = useScrollAnimation();
  const [projectsSectionRef, projectsSectionRefVisible] = useScrollAnimation();

  return (
    <div className="text-text dark:text-dark-text">
      <div ref={heroRef} className={animatedClass(heroVisible)}>
        <HeroContentSwitcher />
      </div>

      <div ref={socialsRef} className={`py-8 ${animatedClass(socialsVisible)}`}>
        <Suspense fallback={<SectionFallback />}>
          <Socials />
        </Suspense>
      </div>

      <div ref={imageSectionsRef} className={`py-8 ${animatedClass(imageSectionsVisible)}`}>
        <Suspense fallback={<SectionFallback />}>
          <ImageSections />
        </Suspense>
      </div>

      <div ref={leetCodeRef} className={`py-8 ${animatedClass(leetCodeVisible)}`}>
        <Suspense fallback={<SectionFallback />}>
          <LeetCode />
        </Suspense>
      </div>

      <div ref={miniGameRef} className={`py-8 ${animatedClass(miniGameVisible)}`}>
        <Suspense fallback={<SectionFallback />}>
          <MiniGameSection />
        </Suspense>
      </div>

      <div ref={projectsSectionRef} className={`py-8 ${animatedClass(projectsSectionRefVisible)}`}>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
