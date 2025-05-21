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


    // ✅ Simulated Live Watching (random between 1-15)
    function updateLiveWatching() {
        const count = Math.floor(Math.random() * 15) + 1;
        document.getElementById("watching-count").textContent = count;
    }
    setInterval(updateLiveWatching, 3000);
    updateLiveWatching();

    // ✅ Total Visit Counter using CountAPI (only increments once per load)
    fetch('https://api.countapi.xyz/hit/talebulislam.github.io')
        .then(res => res.json())
        .then(data => {
            document.getElementById("total-visits").textContent = data.value;
        })
        .catch(error => {
            document.getElementById("total-visits").textContent = "Error";
            console.error('Visit Counter Error:', error);
        });