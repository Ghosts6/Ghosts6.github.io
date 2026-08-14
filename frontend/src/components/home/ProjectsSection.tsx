import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
        <h2 className="font-display text-3xl font-bold mb-4 text-accent dark:text-dark-accent">
          Projects
        </h2>
        <p className="text-lg leading-relaxed max-w-prose mx-auto">
          Want to see more about my work? Browse featured projects or open my resume.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
          <Link
            to="/projects"
            className="flex-1 min-h-[44px] inline-flex items-center justify-center bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
          >
            Projects
          </Link>
          <a
            href={`${process.env.PUBLIC_URL}/data/cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[44px] inline-flex items-center justify-center bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
          >
            View Resume
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/data/cv.pdf`}
            download="Kiarash_Bashokian_Resume.pdf"
            className="flex-1 min-h-[44px] inline-flex items-center justify-center border-2 border-accent text-accent dark:border-dark-accent dark:text-dark-accent font-bold py-2 px-4 rounded-full hover:bg-accent hover:text-white dark:hover:bg-dark-accent dark:hover:text-white transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
