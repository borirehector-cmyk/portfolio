// Smooth scrolling for navigation and buttons
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    mobileMenuButton.classList.toggle('open');
  });
}

// Simple animation for section reveal
const revealElements = document.querySelectorAll('.section, .project-card');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
