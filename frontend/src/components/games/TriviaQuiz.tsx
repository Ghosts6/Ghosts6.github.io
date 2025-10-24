
import React, { useState, useEffect } from 'react';
import { triviaQuestions, TriviaQuestion } from '../../data/triviaData';

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Function to get result message based on score
const getResultMessage = (score: number, total: number): string => {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  if (percentage === 100) return "Incredible! You're a trivia legend!";
  if (percentage >= 76) return "Great score! You're a true trivia master!";
  if (percentage >= 51) return "Nice job! You're getting the hang of it.";
  if (percentage >= 26) return "Good try! Every attempt is a step forward.";
  return "Every expert was once a beginner. Keep going!";
};

interface TriviaQuizProps {
  onGameEnd: (score: number, totalQuestions: number) => void;
  onRestart: () => void;
}

const TriviaQuiz: React.FC<TriviaQuizProps> = ({ onGameEnd, onRestart }) => {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const loadQuestions = () => {
    const shuffled = shuffleArray(triviaQuestions);
    setQuestions(shuffled.slice(0, 5));
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    if (showResult) {
      onGameEnd(score, questions.length);
    }
  }, [showResult, score, questions.length, onGameEnd]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartGame = () => {
    loadQuestions();
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResult(false);
    onRestart();
  };

  if (questions.length === 0) {
    return <div className="min-h-[350px] flex items-center justify-center">Loading...</div>;
  }

  const renderContent = () => {
    if (showResult) {
      const resultMessage = getResultMessage(score, questions.length);
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-bold mb-4 animate-pulse">{resultMessage}</h2>
          <p className="text-lg mb-4">Your score: {score} / {questions.length}</p>
          <button
            onClick={handleRestartGame}
            className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded"
          >
            Play Again
          </button>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}/{questions.length}</h2>
        <p className="text-base sm:text-lg mb-4">{currentQuestion.question}</p>
        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = currentQuestion.correctAnswer === option;
            const buttonClass = isAnswered
              ? isCorrect
                ? 'bg-green-500'
                : isSelected
                ? 'bg-red-500'
                : 'bg-gray-500 dark:bg-gray-700'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600';

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswered}
                className={`w-full text-left p-3 rounded-lg transition-colors duration-300 ${buttonClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div className="mt-4 text-center">
              <button
              onClick={handleNextQuestion}
              className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-4 rounded"
              >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Show Results'}
              </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative bg-primary dark:bg-dark-primary text-text dark:text-dark-text p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto min-h-[350px]">
      {renderContent()}
    </div>
  );
};

export default TriviaQuiz;
