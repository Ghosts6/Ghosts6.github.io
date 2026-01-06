import React from 'react';

const imageSections = [
  {
    title: '📊 GitHub Stats',
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
    title: '🏆 GitHub Trophies',
    images: [
      {
        src: 'https://github-profile-trophy.vercel.app/?username=Ghosts6&theme=monokai&no-frame=false&no-bg=true&margin-w=4',
        alt: 'GitHub Trophies',
        errorSrc: 'static/error/old-trophy.png',
      },
    ],
  },
  {
    title: '✍️ Random Dev Quote',
    images: [
      {
        src: 'https://quotes-github-readme.vercel.app/api?type=vertical&theme=tokyonight',
        alt: 'Random Dev Quote',
        errorSrc: 'static/error/old-quote.png',
      },
    ],
  },
  {
    title: '🔝 Top Contributed Repo',
    images: [
      {
        src: 'https://github-contributor-stats.vercel.app/api?username=Ghosts6&limit=5&theme=tokyonight&combine_all_yearly_contributions=true',
        alt: 'Top Contributed Repositories',
        errorSrc: 'static/error/old-repo.png',
      },
    ],
  },
  {
    title: '😂 Random Dev Meme',
    images: [
      {
        src: `static/img/meme/meme${Math.floor(Math.random() * 10) + 1}.jpg`,
        alt: 'Random Dev Meme',
        errorSrc: 'static/img/500.jpg',
      },
    ],
  },
];

const ImageSections: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {imageSections.map((section) => (
        <div key={section.title} className="mt-16">
          <div className="bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">{section.title}</h2>
            <div className={`flex justify-center gap-8 ${section.title === '🏆 GitHub Trophies' ? 'flex-nowrap overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-accent dark:scrollbar-thumb-dark-accent scrollbar-track-secondary dark:scrollbar-track-dark-secondary' : 'flex-wrap'}`}>
              {section.images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`${section.title === '🏆 GitHub Trophies' ? 'flex-shrink-0 h-auto' : 'max-w-full h-auto'}`}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = image.errorSrc;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSections;
