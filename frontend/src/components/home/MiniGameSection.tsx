import React from 'react';

const MiniGameSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">🎮 Mini Games</h2>
        <p className="text-lg leading-relaxed mb-6">
          A collection of fun mini-games to play and relax. Coming soon!
        </p>
        {/* Mini-game content will go here */}
      </div>
    </div>
  );
};

export default MiniGameSection;
