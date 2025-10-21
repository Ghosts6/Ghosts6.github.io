/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        movingColor: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'bounce-up': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        movingColor: 'movingColor 10s infinite',
        gradient: 'gradient 3s ease infinite',
        'bounce-up': 'bounce-up 1.5s infinite',
      },
      backgroundImage: {
        gradientColor: 'linear-gradient(45deg, #a6e3ff, #85d3c8, #c7b3ff)',
      },
      colors: {
        primary: '#E0E2E5',
        secondary: '#F8F8F8',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        text: '#1F2937',
        'dark-primary': '#1F2937',
        'dark-secondary': '#374151',
        'dark-accent': '#60A5FA',
        'dark-accent-hover': '#3B82F6',
        'dark-text': '#F3F4F6',
        
        'sun-yellow': '#FBBF24',
        'moon-blue': '#93C5FD',
        
        sectionBg: '#2e4053',
        sectionBorder: '#1ad50d',
        sectionBorderDark: '#0be9f0',
        projectVideo: '#1ad50d',
        projectVideoDark: '#0be9f0',
        leet: {
          DEFAULT: '#17C3B2',
          hover: '#0B5563',
        },
        gradientStart: '#00a8fd',
        gradientEnd: '#ff69b4',
        gradientHoverStart: '#00ffff',
        gradientHoverEnd: '#ff00ff',
        gradientActiveStart: '#008080',
        gradientActiveEnd: '#ff1493',
      },
      boxShadow: {
        projectDefault: '0 8px 15px rgba(0, 0, 0, 0.2)',
        projectHover: '0 12px 20px rgba(0, 0, 0, 0.25)',
        projectActive: '0 4px 10px rgba(0, 0, 0, 0.2)',
        'custom-light': '0 4px 10px rgba(0, 0, 0, 0.2)',
        'custom-dark': '0 12px 20px rgba(255, 255, 255, 0.3)',
      },
      borderRadius: {
        leet: '10px',
        projectButton: '50px',
      },
      spacing: {
        '800px': '800px',
        '14px': '14px',
        '40px': '40px',
        45: '45px',
        200: '200px',
      },
      letterSpacing: {
        tightest: '.1rem',
      },
      fontFamily: {
        tahoma: ['Tahoma', 'sans-serif'],
      },
      flex: {
        '1': '1 1 48%',
      },
      screens: {
        'md-lg': { min: '600px', max: '1200px' },
      },
    },
  },
  plugins: [],
}
