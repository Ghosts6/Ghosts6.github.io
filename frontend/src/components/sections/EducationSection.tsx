import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">🎓 Education</h3>
      <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
        <li className="mb-2">
          <span className="font-semibold">Bachelor of Computer Science: Software</span> - York University, Toronto, Ontario, Canada
          <p className="text-md text-gray-600 dark:text-gray-400">Expected Graduation: 02/2025</p>
        </li>
        <li>
          <span className="font-semibold">Languages:</span> English (Professional), Persian (Professional)
        </li>
      </ul>
    </div>
  );
};

export default EducationSection;
