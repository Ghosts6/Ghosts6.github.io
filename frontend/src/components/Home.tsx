import React from 'react';
import Socials from './Socials';
import TechStack from './TechStack';
import ImageSections from './ImageSections';
import LeetCode from './LeetCode';
import ProjectsSection from './ProjectsSection';

const Home: React.FC = () => {
  return (
    <div className="text-text dark:text-dark-text">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-accent dark:text-dark-accent">Hey there! 👋 I'm Kiarash</h1>
          <p className="mt-4 text-lg md:text-xl">A passionate Computer Science student with a love for web development.</p>
        </div>
        <div className="mt-16">
          <div className="max-w-4xl mx-auto bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">💫 About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm a 19-year-old studying Computer Science, specializing in backend development to build robust and scalable web applications. My curiosity extends to network infrastructure and IT systems, with hands-on experience in troubleshooting, network management, and various technical challenges including Linux (Arch/Ubuntu/Debian), CCNA, Network+, VCP-ICM, and Backup Exec.
            </p>
          </div>
        </div>
        <Socials />
        <TechStack />
        <ImageSections />
        <LeetCode />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;