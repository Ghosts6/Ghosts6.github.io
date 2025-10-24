import React from 'react';

const WorkExperienceSection: React.FC = () => {
  return (
    <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">💼 Work Experience</h3>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">Programmer Assistant</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">York University – UIT LTS Team | 08/2025 - Present</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Developing AI-driven backend systems using Python, TypeScript, FastAPI, and frameworks such as CRIA and RAGFlow.</li>
          <li>Collaborating with the Learning Technology Services team to integrate machine learning workflows into university applications.</li>
          <li>Supporting the design of scalable, secure backend services to improve data processing and automation.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">Network Service Assistant</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">York University – UIT Network Team | 05/2025 – 08/2025</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Contributed to automation initiatives by writing backend scripts to extract and process data from Cisco DNA Center (DNAC).</li>
          <li>Assisted in server room surveys and infrastructure optimization projects, improving system documentation and monitoring.</li>
          <li>Supported the deployment and management of Cisco-based systems, gaining hands-on experience with enterprise network automation.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">Web Developer</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">Gh Light | Tehran, Iran</p>
        <p className="text-md text-gray-500 dark:text-gray-500 mb-2">03/2024–05/2024</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Built and optimized a full-stack website (backend, frontend, database, SEO) within a 2-month timeline.</li>
          <li>Improved system performance and user experience through code optimization and efficient database design.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">IT Expert</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">Arya Heavy Machinery | Tehran, Iran</p>
        <p className="text-md text-gray-500 dark:text-gray-500 mb-2">11/2023 - 02/2024</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Delivered enterprise IT support across servers, firewalls, and network infrastructure for 200+ employees.</li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-text dark:text-dark-text">Qt Developer Trainee</h4>
        <p className="text-lg text-gray-600 dark:text-gray-400">Tehran, Iran</p>
        <p className="text-md text-gray-500 dark:text-gray-500 mb-2">09/2022 - 12/2022</p>
        <ul className="list-disc list-inside text-lg leading-relaxed text-text dark:text-dark-text">
          <li>Enhanced C++/C OOP and memory management skills while developing applications with the Qt framework.</li>
          <li>Designed and tested GUI components, gaining practical experience in software development lifecycles.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceSection;

