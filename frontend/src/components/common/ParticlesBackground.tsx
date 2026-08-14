import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import useDarkMode from '../../hooks/useDarkMode';

type DeviceProfile = 'mobile' | 'tablet' | 'desktop';

const getDeviceProfile = (): DeviceProfile => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isDarkMode] = useDarkMode();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [deviceProfile, setDeviceProfile] = useState<DeviceProfile>(() => getDeviceProfile());

  useEffect(() => {
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReduceMotion(motionMedia.matches);
    updateMotion();
    motionMedia.addEventListener('change', updateMotion);

    const updateProfile = () => setDeviceProfile(getDeviceProfile());
    updateProfile();
    window.addEventListener('resize', updateProfile, { passive: true });

    return () => {
      motionMedia.removeEventListener('change', updateMotion);
      window.removeEventListener('resize', updateProfile);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [reduceMotion]);

  const isMobile = deviceProfile === 'mobile';
  const isTablet = deviceProfile === 'tablet';

  const options = useMemo(() => {
    const particleCount = isMobile ? 38 : isTablet ? 58 : 90;
    const linkDistance = isMobile ? 105 : isTablet ? 130 : 150;
    const moveSpeed = isMobile ? 0.9 : isTablet ? 1.4 : 2;

    return {
      fpsLimit: isMobile ? 30 : 60,
      pauseOnBlur: true,
      detectRetina: !isMobile,
      fullScreen: { enable: false },
      interactivity: {
        detectsOn: 'window' as const,
        events: {
          onClick: { enable: !isMobile, mode: 'push' as const },
          onHover: { enable: !isMobile && !isTablet, mode: 'repulse' as const },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: isMobile ? 2 : 4 },
          repulse: { distance: 90, duration: 0.35 },
        },
      },
      particles: {
        color: { value: isDarkMode ? '#ffffff' : '#000000' },
        links: {
          color: '#888888',
          distance: linkDistance,
          enable: true,
          opacity: isDarkMode ? 0.42 : 0.68,
          width: 1,
        },
        collisions: { enable: false },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: { default: 'out' as const },
          random: false,
          speed: moveSpeed,
          straight: false,
        },
        number: {
          density: { enable: true, width: isMobile ? 900 : 800, height: isMobile ? 900 : 800 },
          value: particleCount,
        },
        opacity: { value: isDarkMode ? 0.48 : 0.75 },
        shape: { type: 'circle' as const },
        size: { value: { min: 1, max: isMobile ? 3.5 : 5 } },
      },
    };
  }, [isDarkMode, isMobile, isTablet]);

  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-primary via-primary to-secondary dark:from-dark-primary dark:via-dark-primary dark:to-dark-secondary"
      />
    );
  }

  if (init) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <Particles
          key={`${isDarkMode ? 'dark' : 'light'}-${deviceProfile}`}
          id="tsparticles"
          options={options as any}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-primary dark:bg-dark-primary"
    />
  );
};

export default ParticlesBackground;
