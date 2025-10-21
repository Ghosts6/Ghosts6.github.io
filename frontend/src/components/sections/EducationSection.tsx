import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">🎓 Education</h3>
      <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
        <li className="mb-2">
          <span className="font-semibold">Bachelor of Science in Computer Science</span> - [Your University Name], [Your City/Country]
          <p className="text-md text-gray-600 dark:text-gray-400">Expected Graduation: [Year]</p>
        </li>
        <li>
          <span className="font-semibold">Relevant Coursework:</span> Data Structures & Algorithms, Database Management, Operating Systems, Web Development, Network Security
        </li>
      </ul>
      <p className="text-lg leading-relaxed mt-6 text-text dark:text-dark-text">
        Continuously expanding my knowledge in cutting-edge technologies and best practices in software development.
      </p>
    </div>
  );
};

export default EducationSection;
