import React, { Suspense, lazy } from 'react';
import HeroContentSwitcher from '../components/sections/HeroContentSwitcher';
import useSectionReveal from '../hooks/useSectionReveal';

const Socials = lazy(() => import('../components/home/Socials'));
const ImageSections = lazy(() => import('../components/home/ImageSections'));
const LeetCode = lazy(() => import('../components/home/LeetCode'));
const MiniGameSection = lazy(() => import('../components/home/MiniGameSection'));
const ProjectsSection = lazy(() => import('../components/home/ProjectsSection'));

const sectionRevealClass = (visible: boolean) =>
  `section-reveal ${visible ? 'section-reveal-visible' : ''}`;

type HomeSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement>;
  shouldMount: boolean;
  isVisible: boolean;
  reserveHeightClass: string;
  children: React.ReactNode;
};

const HomeSection: React.FC<HomeSectionProps> = ({
  sectionRef,
  shouldMount,
  isVisible,
  reserveHeightClass,
  children,
}) => (
  <div
    ref={sectionRef}
    className={`py-8 ${sectionRevealClass(isVisible)} ${!shouldMount ? reserveHeightClass : ''}`}
  >
    {shouldMount ? (
      <Suspense fallback={<div className={reserveHeightClass} aria-hidden="true" />}>{children}</Suspense>
    ) : null}
  </div>
);

const Home: React.FC = () => {
  const [heroRef, heroState] = useSectionReveal({ immediate: true });
  const [socialsRef, socialsState] = useSectionReveal();
  const [imageSectionsRef, imageSectionsState] = useSectionReveal({ loadRootMargin: '480px 0px' });
  const [leetCodeRef, leetCodeState] = useSectionReveal();
  const [miniGameRef, miniGameState] = useSectionReveal();
  const [projectsSectionRef, projectsSectionState] = useSectionReveal();

  return (
    <div className="text-text dark:text-dark-text">
      <div ref={heroRef} className={sectionRevealClass(heroState.isVisible)}>
        <HeroContentSwitcher />
      </div>

      <HomeSection sectionRef={socialsRef} shouldMount={socialsState.shouldMount} isVisible={socialsState.isVisible} reserveHeightClass="min-h-[260px]">
        <Socials />
      </HomeSection>

      <HomeSection sectionRef={imageSectionsRef} shouldMount={imageSectionsState.shouldMount} isVisible={imageSectionsState.isVisible} reserveHeightClass="min-h-[320px]">
        <ImageSections />
      </HomeSection>

      <HomeSection sectionRef={leetCodeRef} shouldMount={leetCodeState.shouldMount} isVisible={leetCodeState.isVisible} reserveHeightClass="min-h-[220px]">
        <LeetCode />
      </HomeSection>

      <HomeSection sectionRef={miniGameRef} shouldMount={miniGameState.shouldMount} isVisible={miniGameState.isVisible} reserveHeightClass="min-h-[360px]">
        <MiniGameSection />
      </HomeSection>

      <HomeSection sectionRef={projectsSectionRef} shouldMount={projectsSectionState.shouldMount} isVisible={projectsSectionState.isVisible} reserveHeightClass="min-h-[220px]">
        <ProjectsSection />
      </HomeSection>
    </div>
  );
};

export default Home;
