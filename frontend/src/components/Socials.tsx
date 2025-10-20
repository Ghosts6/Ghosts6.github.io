import React from 'react';

const socials = [
  { name: 'Discord', url: 'https://discord.gg/ghost.rs6', icon: 'fab fa-discord', color: '#7289da' },
  { name: 'Instagram', url: 'https://instagram.com/kiarash82.42?igshid=OGQ5ZDc2ODk2ZA==', icon: 'fab fa-instagram', color: '#e4405f' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kiarashbashokian', icon: 'fab fa-linkedin', color: '#0077b5' },
  { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/17490586', icon: 'fab fa-stack-overflow', color: '#f48024' },
  { name: 'Twitch', url: 'https://twitch.tv/MKGHOSTK', icon: 'fab fa-twitch', color: '#9146ff' },
  { name: 'YouTube', url: 'https://youtube.com/@kiarashbashokian6411', icon: 'fab fa-youtube', color: '#ff0000' },
];

const Socials: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="max-w-4xl mx-auto bg-secondary dark:bg-dark-secondary p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-accent dark:text-dark-accent">🌐 Socials</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socials.map((social) => (
            <li key={social.name} className="flex items-center">
              <i className={`${social.icon} mr-3 text-2xl`} style={{ color: social.color }}></i>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-lg text-text dark:text-dark-text hover:underline" style={{ color: social.color }}>
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Socials;
