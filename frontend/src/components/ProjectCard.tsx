import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  media: string;
  poster?: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, media, poster, link }) => {
  const isVideo = media.endsWith('.webm');

  return (
    <div className="bg-secondary dark:bg-dark-secondary rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {isVideo ? (
          <video controls autoPlay loop muted poster={poster} className="w-full h-48 object-cover">
            <source src={media} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={media} alt={title} className="w-full h-48 object-cover" />
        )}
      </a>
      <div className="p-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-bold text-accent dark:text-dark-accent hover:underline">{title}</h3>
        </a>
        <p className="mt-2 text-text dark:text-dark-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
