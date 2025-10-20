import React from 'react';

const techStack = [
  { name: 'C', icon: 'static/icon/c.png' },
  { name: 'C++', icon: 'static/icon/c++.png' },
  { name: 'Python', icon: 'static/icon/python.png' },
  { name: 'JavaScript', icon: 'static/icon/javascript.png' },
  { name: 'HTML', icon: 'static/icon/html.png' },
  { name: 'CSS', icon: 'static/icon/css.png' },
  { name: 'Django', icon: 'static/icon/django.png' },
  { name: 'Django REST', icon: 'static/icon/django_rest.png' },
  { name: 'Flask', icon: 'static/icon/flask.png' },
  { name: 'FastAPI', icon: 'static/icon/fastapi.png' },
  { name: 'Qt', icon: 'static/icon/qt.png' },
  { name: 'SQLite', icon: 'static/icon/sqlite.png' },
  { name: 'SQL', icon: 'static/icon/sql.png' },
  { name: 'MySQL', icon: 'static/icon/mysql.png' },
  { name: 'PostgreSQL', icon: 'static/icon/postgresql.png' },
  { name: 'Microsoft SQL Server', icon: 'static/icon/mssql.png' },
  { name: 'MongoDB', icon: 'static/icon/mongo.png' },
  { name: 'NGINX', icon: 'static/icon/nginx.png' },
  { name: 'Apache', icon: 'static/icon/apache.png' },
  { name: 'Docker', icon: 'static/icon/docker.png' },
  { name: 'Bash', icon: 'static/icon/bash.png' },
  { name: 'Shell Script', icon: 'static/icon/bash.png' },
  { name: 'PowerShell', icon: 'static/icon/powershell.png' },
  { name: 'pytest', icon: 'static/icon/pytest.png' },
];

const TechStack: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md">
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
