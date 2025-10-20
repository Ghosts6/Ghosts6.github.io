import React from 'react';
import { projectsData } from '../projectsData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
        <div className="text-text dark:text-dark-text">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-accent dark:text-dark-accent">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;