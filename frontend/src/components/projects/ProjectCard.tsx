import React, { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  media: string;
  poster?: string;
  link: string;
  chromeLink?: string;
  firefoxLink?: string;
  tech?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  media,
  poster,
  link,
  chromeLink,
  firefoxLink,
  tech,
}) => {
  const isVideo = media.endsWith('.webm');
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!isVideo) return;

    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVideo]);

  const getActiveLink = () => {
    if (!chromeLink && !firefoxLink) return link;

    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('firefox')) {
      return firefoxLink || link;
    }
    return chromeLink || link;
  };

  const activeLink = getActiveLink();
  const isExternal = activeLink.startsWith('http') || activeLink.startsWith('mailto:');

  return (
    <div
      ref={cardRef}
      className="group bg-secondary dark:bg-dark-secondary rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 flex flex-col w-96"
    >
      <a
        href={activeLink}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="flex flex-col flex-grow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
        aria-label={`Open project ${title}`}
      >
        <div className="relative w-full h-48 bg-primary dark:bg-dark-primary">
          {isVideo ? (
            shouldLoadVideo ? (
              <video
                controls
                loop
                muted
                playsInline
                poster={poster}
                className="w-full h-48 object-cover"
                preload="none"
                onClick={(e) => e.preventDefault()}
              >
                <source src={media} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            ) : poster ? (
              <img
                src={poster}
                alt=""
                loading="lazy"
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center text-base text-text/60 dark:text-dark-text/60">
                Loading preview…
              </div>
            )
          ) : (
            <img src={media} alt="" loading="lazy" className="w-full h-48 object-cover" />
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-wrap gap-2">
              {(tech || []).slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-1 rounded bg-white/15 text-white"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs font-medium px-2 py-1 rounded bg-accent text-white">
                {chromeLink || firefoxLink ? 'Open extension' : 'View project'}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <h3 className="font-display text-2xl font-bold text-accent dark:text-dark-accent group-hover:underline">
            {title}
          </h3>
          <p
            className="mt-2 text-base text-text dark:text-dark-text flex-grow max-w-prose"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
