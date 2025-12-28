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
    <div className="bg-secondary dark:bg-dark-secondary rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex flex-col w-96">
        {isVideo ? (
          <video controls loop muted poster={poster} className="w-full h-48 object-cover">
            <source src={media} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={media} alt={title} className="w-full h-48 object-cover" />
        )}
      <div className="p-6 flex-grow flex flex-col">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-bold text-accent dark:text-dark-accent hover:underline">{title}</h3>
        </a>
        <p
          className="mt-2 text-text dark:text-dark-text flex-grow"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
