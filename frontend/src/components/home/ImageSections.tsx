import React, { useState } from 'react';

type SectionImage = {
  src: string;
  alt: string;
  errorSrc: string;
  localOnly?: boolean;
};

type ImageSection = {
  title: string;
  images: SectionImage[];
  note?: string;
};

const imageSections: ImageSection[] = [
  {
    title: 'GitHub Stats',
    images: [
      {
        src: 'https://github-readme-stats-eight-theta.vercel.app/api?username=Ghosts6&theme=chartreuse-dark&hide_border=false&include_all_commits=true&count_private=true',
        alt: 'GitHub Stats',
        errorSrc: 'static/error/old-stats.png',
      },
      {
        src: 'https://streak-stats.demolab.com/?user=Ghosts6&theme=chartreuse-dark&hide_border=false',
        alt: 'GitHub Streak Stats',
        errorSrc: 'static/error/old-streak.png',
      },
      {
        src: 'https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Ghosts6&theme=chartreuse-dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact',
        alt: 'Top Languages',
        errorSrc: 'static/error/old-langs.png',
      },
    ],
  },
  {
    title: 'GitHub Trophies',
    note: 'Live trophy API is unavailable; showing a saved snapshot.',
    images: [
      {
        src: 'static/error/old-trophy.png',
        alt: 'GitHub Trophies',
        errorSrc: 'static/error/old-trophy.png',
        localOnly: true,
      },
    ],
  },
  {
    title: 'Random Dev Quote',
    images: [
      {
        src: 'https://quotes-github-readme.vercel.app/api?type=vertical&theme=tokyonight',
        alt: 'Random Dev Quote',
        errorSrc: 'static/error/old-quote.png',
      },
    ],
  },
  {
    title: 'Top Contributed Repo',
    note: 'Contributor stats API is unavailable; showing a saved snapshot.',
    images: [
      {
        src: 'static/error/old-repo.png',
        alt: 'Top Contributed Repositories',
        errorSrc: 'static/error/old-repo.png',
        localOnly: true,
      },
    ],
  },
  {
    title: 'Random Dev Meme',
    images: [
      {
        src: `static/img/meme/meme${Math.floor(Math.random() * 10) + 1}.jpg`,
        alt: 'Random Dev Meme',
        errorSrc: 'static/img/500.jpg',
        localOnly: true,
      },
    ],
  },
];

const WidgetImage: React.FC<{ image: SectionImage }> = ({ image }) => {
  const [failed, setFailed] = useState(false);
  const [src, setSrc] = useState(image.src);

  if (failed && !image.localOnly) {
    return (
      <p className="text-base text-text/70 dark:text-dark-text/70 max-w-prose mx-auto">
        Could not load this widget right now. Try refreshing later.
      </p>
    );
  }

  return (
    <img
      src={src}
      alt={image.alt}
      loading="lazy"
      className="max-w-full h-auto"
      onError={() => {
        if (src !== image.errorSrc) {
          setSrc(image.errorSrc);
          return;
        }
        setFailed(true);
      }}
    />
  );
};

const ImageSections: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {imageSections.map((section) => (
        <div key={section.title} className="mt-16">
          <div className="bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
            <h2 className="font-display text-3xl font-bold mb-4 text-accent dark:text-dark-accent">
              {section.title}
            </h2>
            {section.note && (
              <p className="text-base text-text/70 dark:text-dark-text/70 mb-4 max-w-prose mx-auto">
                {section.note}
              </p>
            )}
            <div className="flex justify-center gap-8 flex-wrap">
              {section.images.map((image) => (
                <WidgetImage key={image.alt + image.src} image={image} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSections;
