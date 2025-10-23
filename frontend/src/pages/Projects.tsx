import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/projects/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="text-text dark:text-dark-text">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-accent dark:text-dark-accent relative overflow-hidden">
          <span className="block animate-text-slide">My Projects</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
