import React from 'react';

const techStack = [
  { name: 'Python', icon: 'static/icon/python.png' },
  { name: 'JavaScript', icon: 'static/icon/javascript.png' },
  { name: 'TypeScript', icon: 'static/icon/ts.png' },
  { name: 'PHP', icon: 'static/icon/PHP.png' },
  { name: 'Java', icon: 'static/icon/Java.png' },
  { name: 'C/C++', icon: 'static/icon/c++.png' },
  { name: 'Django', icon: 'static/icon/django.png' },
  { name: 'Django REST', icon: 'static/icon/django_rest.png' },
  { name: 'FastAPI', icon: 'static/icon/fastapi.png' },
  { name: 'Flask', icon: 'static/icon/flask.png' },
  { name: 'PostgreSQL', icon: 'static/icon/postgresql.png' },
  { name: 'MySQL', icon: 'static/icon/mysql.png' },
  { name: 'SQLite', icon: 'static/icon/sqlite.png' },
  { name: 'Oracle', icon: 'static/icon/Oracle.png' },
  { name: 'MongoDB', icon: 'static/icon/mongo.png' },
  { name: 'Elasticsearch', icon: 'static/icon/elasticsearch.png' },
  { name: 'Redis', icon: 'static/icon/Redis.png' },  
  { name: 'React.js', icon: 'static/icon/React.png' },
  { name: 'HTML5', icon: 'static/icon/html.png' },
  { name: 'CSS3', icon: 'static/icon/css.png' },
  { name: 'Bootstrap', icon: 'static/icon/Bootstrap.png' },
  { name: 'Tailwind CSS', icon: 'static/icon/Tailwind CSS.png' },
  { name: 'Git', icon: 'static/icon/Git.png' },
  { name: 'Docker', icon: 'static/icon/docker.png' },
  { name: 'Kubernetes', icon: 'static/icon/kubernetes.png' },
  { name: 'pytest', icon: 'static/icon/pytest.png' },
  { name: 'Jest', icon: 'static/icon/jest.png' },
  { name: 'Postman', icon: 'static/icon/Postman.png' }, 
  { name: 'Nginx', icon: 'static/icon/nginx.png' },
  { name: 'Apache', icon: 'static/icon/apache.png' },
  { name: 'Linux', icon: 'static/icon/linux.png' },
  { name: 'Bash', icon: 'static/icon/bash.png' },
  { name: 'Ragflow', icon: 'static/icon/ragflow.svg' },
];

const TechStack: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">💻 Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          {techStack.map((tech) => (
            <li key={tech.name} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
              <span className="mt-2 text-text dark:text-dark-text">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;

