import React, { useState, useEffect } from 'react';

const MemeGenerator: React.FC = () => {
  const [meme, setMeme] = useState<string>('');

  useEffect(() => {
    const memes = [
      '/static/img/meme/meme1.jpg',
      '/static/img/meme/meme2.jpg',
      '/static/img/meme/meme3.jpg',
      '/static/img/meme/meme4.jpg',
      '/static/img/meme/meme5.jpg',
      '/static/img/meme/meme6.jpg',
      '/static/img/meme/meme7.jpg',
      '/static/img/meme/meme8.jpg',
      '/static/img/meme/meme9.jpg',
      '/static/img/meme/meme10.jpg',
    ];

    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMeme(randomMeme);
  }, []);

  return (
    <div>
      <img src={meme} alt="Random Dev Meme" className="w-full rounded-lg shadow-md" />
    </div>
  );
};

export default MemeGenerator;
