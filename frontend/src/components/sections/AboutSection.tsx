import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">💫 About Me</h3>
      <p className="text-lg leading-relaxed mb-6">
        Hello! I'm Kiarash, a passionate Computer Science student with a deep-seated enthusiasm for crafting robust and scalable web applications. At 19, I'm constantly exploring the ever-evolving landscape of technology, with a particular focus on backend development. My journey in computer science is driven by a desire to build efficient systems that power seamless user experiences.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Beyond web development, my curiosity extends into the intricate world of network infrastructure and IT systems. I possess hands-on experience in troubleshooting complex technical challenges, managing networks, and working with various operating systems like Linux (Arch, Ubuntu, Debian). My expertise also includes certifications and practical knowledge in areas such as CCNA, Network+, VCP-ICM, and Backup Exec, ensuring a comprehensive understanding of IT operations.
      </p>
      <p className="text-lg leading-relaxed">
        I am always eager to learn new technologies and contribute to impactful projects. Feel free to connect with me on my social platforms or explore my work!
      </p>
    </div>
  );
};

export default AboutSection;
