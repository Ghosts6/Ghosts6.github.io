import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import useDarkMode from '../../hooks/useDarkMode';

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isDarkMode] = useDarkMode();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [reduceMotion]);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      pauseOnBlur: true,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: { enable: true },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 150,
            links: {
              opacity: 1,
            },
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? '#ffffff' : '#000000',
        },
        links: {
          color: '#888888',
          distance: 150,
          enable: true,
          opacity: isDarkMode ? 0.5 : 0.8,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: isDarkMode ? 0.5 : 0.8,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      responsive: [
        {
          breakpoint: 740,
          options: {
            particles: {
              number: {
                value: 65,
              },
            },
          },
        },
      ],
    }),
    [isDarkMode],
  );

  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary via-primary to-secondary dark:from-dark-primary dark:via-dark-primary dark:to-dark-secondary"
      />
    );
  }

  if (init) {
    return (
      <div style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}>
        <Particles
          key={isDarkMode ? 'dark' : 'light'}
          id="tsparticles"
          options={options as any}
        />
      </div>
    );
  }

  return null;
};

export default ParticlesBackground;
