import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <div className="p-8 bg-secondary dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-accent dark:text-dark-accent border-b border-accent dark:border-dark-accent pb-2">💫 About Me</h3>
      <p className="text-lg leading-relaxed mb-6">
        I am a Backend Developer based in Toronto, ON, specializing in scalable and secure web solutions. With a strong background in IT infrastructure, I am proficient in building high-performance systems using Monolithic and Hybrid Architectures.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        My technical expertise includes Python, JavaScript, and C++, with a focus on frameworks like Django, FastAPI, and Flask for building secure and efficient web applications. I have experience with both MPA + SSR and SPA + SSR architectures, as well as a variety of SQL and NoSQL databases such as PostgreSQL, MySQL, MongoDB, and Redis. My skills also extend to CI/CD pipelines, ensuring smooth and automated deployment processes.
      </p>
      <p className="text-lg leading-relaxed">
        With a solid foundation in Linux Systems Administration and Network Infrastructure Management, I am adept at optimizing for performance and security. I am passionate about problem-solving, continuous learning, and leveraging my skills to drive innovation in backend development.
      </p>
    </div>
  );
};

export default AboutSection;
