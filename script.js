document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (!toggle || !nav) return;

  const navLinks = nav.querySelectorAll('a');

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });});