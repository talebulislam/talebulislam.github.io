// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
const sections = document.querySelectorAll('.section');

const checkVisibility = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Initial check


    // Simulated Live Watching
    function updateLiveWatching() {
        const count = Math.floor(Math.random() * 10) + 1;
        document.getElementById("watching-count").textContent = count;
    }
    setInterval(updateLiveWatching, 5000);
    updateLiveWatching();

    // Total Visit Count
    fetch("https://api.countapi.dev/hit/talebulislam.github.io/visits")
        .then(res => res.json())
        .then(data => {
            document.getElementById("total-visits").textContent = data.value;
        });