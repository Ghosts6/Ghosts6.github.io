import React, { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import TriviaQuiz from '../games/TriviaQuiz';

const MiniGameSection: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleGameEnd = (score: number, totalQuestions: number) => {
    if (totalQuestions > 0) {
      const percentage = (score / totalQuestions) * 100;
      if (percentage >= 76) {
        setShowConfetti(true);
      }
    }
  };

  const handleRestart = () => {
    setShowConfetti(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="relative bg-secondary dark:bg-dark-secondary p-6 sm:p-8 rounded-lg shadow-md text-center overflow-hidden">
        {init && showConfetti && (
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Particles
              id="quiz-confetti"
              options={{
                preset: "confetti",
                fullScreen: { enable: false },
                particles: {
                  number: { value: 100 },
                  color: { value: ["#ff577f", "#ff884b", "#ffd384", "#fff9b0", "#3498db", "#9b59b6"] },
                  shape: { type: ["circle", "square", "triangle", "star"] },
                  opacity: { value: { min: 0.3, max: 0.8 } },
                  size: { value: { min: 3, max: 7 } },
                  move: {
                    enable: true,
                    speed: 3,
                    direction: "bottom",
                    outModes: { default: "out" },
                  },
                },
                background: { color: "transparent" },
                responsive: [
                  {
                    maxWidth: 768,
                    options: {
                      particles: {
                        number: {
                          value: 50,
                        },
                      },
                    },
                  },
                ],
              }}
            />
          </div>
        )}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">🎮 Mini Game: Trivia Quiz</h2>
          <p className="text-lg leading-relaxed mb-6">
            Test your knowledge with this short quiz on programming and technology!
          </p>
          <TriviaQuiz onGameEnd={handleGameEnd} onRestart={handleRestart} />
        </div>
      </div>
    </div>
  );
};

export default MiniGameSection;
