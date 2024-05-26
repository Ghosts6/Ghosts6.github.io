particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
      opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
    },
    retina_detect: true,
  });
  
function applyDarkMode(isDarkMode) {
    const body = document.body;
    const darkModeIcon = document.getElementById('dark-mode-icon');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeIcon.classList.add('fa-sun');
        darkModeIcon.classList.remove('fa-moon');
        body.style.background = 'linear-gradient(45deg, #2c3e50, #34495e, #5d6d7e)';
        body.style.color = '#ffffff';
    } else {
        body.classList.remove('dark-mode');
        darkModeIcon.classList.add('fa-moon');
        darkModeIcon.classList.remove('fa-sun');
        body.style.background = 'linear-gradient(45deg, #a6e3ff, #85d3c8, #c7b3ff)';
        body.style.color = 'white';
    }
}

function toggleDarkMode() {
    const isDarkMode = !document.body.classList.contains('dark-mode');
    applyDarkMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(savedDarkMode);
});
