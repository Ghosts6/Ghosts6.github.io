import React from 'react';

const LeetCode: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
        <img src="static/img/leet_code.svg" alt="leetCodeIcon" className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">LeetCode</h2>
        <p className="text-lg leading-relaxed">
          Welcome to my LeetCode exercise repository! Here, you'll find a collection of my solutions to various LeetCode problems, implemented in C++, C, Python, SQL, JavaScript, and Bash.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Feel free to browse through the folders corresponding to different languages to explore solutions to specific problems. Each problem is organized in its own folder and includes both the problem statement and my solution.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I created this repository to:
        </p>
        <ul className="list-disc list-inside mt-2 text-lg">
          <li>Keep track of my LeetCode journey.</li>
          <li>Sharpen my problem-solving skills.</li>
          <li>Provide a resource for others to learn and understand different problem-solving approaches.</li>
        </ul>
        <div className="flex justify-center gap-4 mt-8">
          <a href="https://leetcode.com/Ghosts6/" target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors">
            LeetCode Profile
          </a>
          <a href="https://github.com/Ghosts6/LeetCode_exercise" target="_blank" rel="noopener noreferrer" className="bg-accent text-white font-bold py-2 px-4 rounded-full hover:bg-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors">
            LeetCode Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeetCode;

