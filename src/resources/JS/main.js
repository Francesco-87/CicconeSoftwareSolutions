// src/resources/js/main.js

import homeTpl         from '@/pages/home.html?raw';
import aboutTpl        from '@/pages/about.html?raw';
import servicesTpl     from '@/pages/services.html?raw';
import projectsTpl      from '@/pages/projects.html?raw';
import contactTpl      from '@/pages/contact.html?raw';

const templates = {
  home:         homeTpl,
  about:        aboutTpl,
  services:     servicesTpl,   // <-- match your data-page="products"
  projects:      projectsTpl,
  contact:      contactTpl
};

const main = document.getElementById('main-content');

/** Single loader function using the templates map */
function loadPage(page) {
  main.innerHTML = templates[page] || `<p style="padding:2rem;color:red">
    Site not available.
  </p>`;

  // If you have testimonial logic inside your HTML snippets:
  const items = main.querySelectorAll('.testimonial-item');
  if (items.length) {
    let idx = 0;
    const show = i => items.forEach((el, j) =>
      el.classList.toggle('active', i === j)
    );
    show(idx);
    setInterval(() => show(idx = (idx + 1) % items.length), 5000);
  }
}


document.addEventListener("DOMContentLoaded", () => { 
  loadPage("home");

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[data-page]');
    if (!link) return;
      e.preventDefault();
      loadPage(link.dataset.page);

    // close mobile nav if open
    document.querySelector('nav')?.classList.remove('open');
  });

  // Hamburger toggle
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.querySelector('nav')?.classList.toggle('open');
  });
});

