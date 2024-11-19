module.exports = {
  content: [  
    "./*.html",
    "./static/js/**/*.js",        
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
      },
      animation: {
        movingColor: 'movingColor 10s infinite',
        gradient: 'gradient 3s ease infinite',
      },

      backgroundImage: {
        gradientColor: 'linear-gradient(45deg, #a6e3ff, #85d3c8, #c7b3ff)',
      },

      colors: {
        scrollbarBg: '#2e4053',
        scrollbarThumb: '#1ad50d',
        scrollbarThumbHover: '#0be9f0',
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

    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }), 
  ],
};


