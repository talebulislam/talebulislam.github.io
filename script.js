// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Animation
const sections = document.querySelectorAll('.section');

function revealSectionsOnScroll() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
revealSectionsOnScroll(); // Initial load

// Simulated Live Watching (Random 1-15)
function updateLiveWatching() {
  const count = Math.floor(Math.random() * 15) + 1;
  const el = document.getElementById("watching-count");
  if (el) el.textContent = count;
}
setInterval(updateLiveWatching, 3000);
updateLiveWatching();

// Animate Counter
function animateCounter(el, target) {
  let count = 0;
  const duration = 1000;
  const increment = target / (duration / 50);
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(count);
  }, 50);
}

// API Callback Function for Visit Count
function updateVisitCount(response) {
  const el = document.getElementById('total-visits');
  if (el) animateCounter(el, response.value);
}