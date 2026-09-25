document.body.classList.add("js-ready");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
const navigationLinks = [
  ...document.querySelectorAll('#primary-nav a[href^="#"]'),
];
const sections = [...document.querySelectorAll(".section")];

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  menuButton.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
}

menuButton.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
  menuButton.innerHTML = `<i class="fas fa-${isOpen ? "times" : "bars"}" aria-hidden="true"></i>`;
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("menu-open"))
    closeMenu();
});
document.addEventListener("click", (event) => {
  if (
    document.body.classList.contains("menu-open") &&
    !navigation.contains(event.target) &&
    !event.composedPath().includes(menuButton)
  )
    closeMenu();
});

const skillCategories = {
  Angular: "frontend",
  React: "frontend",
  ".NET Core": "backend",
  "C#": "backend",
  "RESTful APIs": "backend",
  Microservices: "backend",
  "Node.js": "backend",
  "SQL Server": "backend",
  Azure: "cloud",
  AWS: "cloud",
  GCP: "cloud",
  Docker: "delivery",
  Kubernetes: "delivery",
  Git: "delivery",
  "CI/CD Pipelines": "delivery",
  "Agile Methodologies": "delivery",
  "SDLC & Delivery": "delivery",
};

const skillCards = [...document.querySelectorAll(".skill")];
skillCards.forEach((card) => {
  const name = card.querySelector(".skill-name").textContent.trim();
  card.dataset.category = skillCategories[name] || "delivery";
});

document.querySelectorAll(".skill-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    document.querySelectorAll(".skill-filter").forEach((filter) => {
      filter.setAttribute("aria-pressed", String(filter === button));
    });
    skillCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  sections.forEach((section) => revealObserver.observe(section));

  const navigationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach((link) => {
          link.classList.toggle("active", link.hash === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-25% 0px -65% 0px" },
  );
  sections.forEach((section) => navigationObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add("is-visible"));
}
