
import React, { useState, useEffect } from 'react';
import { triviaQuestions, TriviaQuestion } from '../../data/triviaData';

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const TriviaQuiz: React.FC = () => {
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
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (showResult) {
    return (
      <div className="bg-primary dark:bg-dark-primary text-text dark:text-dark-text p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
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
    <div className="bg-primary dark:bg-dark-primary text-text dark:text-dark-text p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
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

export default TriviaQuiz;
