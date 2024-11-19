// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: { value: 0.5, anim: { enable: false } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: {
            enable: true, speed: 6, direction: "none",
            random: false, straight: false, out_mode: "out",
            bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true,
});

// Dark Mode Functionality
function applyDarkMode(isDarkMode) {
    const body = document.body;
    const darkModeIcon = document.getElementById('dark-mode-icon');

    body.classList.toggle('dark', isDarkMode); 

    darkModeIcon.classList.toggle('fa-sun', isDarkMode); 
    darkModeIcon.classList.toggle('fa-moon', !isDarkMode); 

    if (isDarkMode) {
        body.style.background = 'linear-gradient(45deg, #2c3e50, #34495e, #5d6d7e)';
        body.style.color = '#ffffff';
    } else {
        body.style.background = 'linear-gradient(45deg, #a6e3ff, #85d3c8, #c7b3ff)';
        body.style.color = '#ffffff';
    }
}

function toggleDarkMode() {
    const isDarkMode = !document.body.classList.contains('dark');
    
    applyDarkMode(isDarkMode); 
 
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(savedDarkMode); 

    const scrollToTopButton = document.getElementById('scrollToTopButton');
    
    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
