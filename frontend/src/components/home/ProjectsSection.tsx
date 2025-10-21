import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">📜 Projects</h2>
        <p className="text-lg leading-relaxed">
          Also if you want to see more about me you can check out some of my projects by clicking on project button.
        </p>
        <div className="mt-8 flex justify-center gap-4 w-full max-w-sm mx-auto"> {/* Added w-full max-w-sm mx-auto */}
          <Link to="/projects" className="flex-1 bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors">
            Projects
          </Link>
          <a
            href="data/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
