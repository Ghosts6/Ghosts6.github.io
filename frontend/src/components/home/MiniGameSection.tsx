import React from 'react';
import TriviaQuiz from '../games/TriviaQuiz';

const MiniGameSection: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-secondary dark:bg-dark-secondary p-6 sm:p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">🎮 Mini Game: Trivia Quiz</h2>
        <p className="text-lg leading-relaxed mb-6">
          Test your knowledge with this short quiz on programming and technology!
        </p>
        <TriviaQuiz />
      </div>
    </div>
  );
};

export default MiniGameSection;
