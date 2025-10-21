import React from 'react';

const WorkExperienceSection: React.FC = () => {
  return (
    <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">💼 Work Experience</h3>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">Software Engineer Intern</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">Tech Solutions Inc. | City, Country</p>
        <p className="text-md text-gray-500 dark:text-gray-500 mb-2">May 2023 – August 2023</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Developed and maintained backend APIs using Python and Django REST Framework, improving data processing efficiency by 15%.</li>
          <li>Collaborated with a team of 5 engineers on designing and implementing new features for a customer management platform.</li>
          <li>Wrote comprehensive unit and integration tests, increasing code coverage by 20%.</li>
          <li>Participated in agile development cycles, including daily stand-ups and sprint reviews.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">Junior Web Developer</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">Creative Digital Agency | City, Country</p>
        <p className="text-md text-gray-500 dark:text-gray-500 mb-2">January 2022 – April 2022</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Assisted in the development of responsive front-end interfaces using React and Tailwind CSS for various client projects.</li>
          <li>Optimized website performance, reducing load times by an average of 10 seconds.</li>
          <li>Worked closely with UI/UX designers to translate wireframes and mockups into functional web pages.</li>
        </ul>
      </div>
      <p className="text-lg leading-relaxed text-text dark:text-dark-text">
        Always seeking new challenges and opportunities to grow as a software engineer.
      </p>
    </div>
  );
};

export default WorkExperienceSection;
