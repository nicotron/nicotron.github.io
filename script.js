document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = Array.from(document.querySelectorAll('.work-toc a[href^="#"]'));
  const sections = tocLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (tocLinks.length === 0 || sections.length === 0) return;

  const setActive = (id) => {
    tocLinks.forEach((a) => {
      const match = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('is-active', match);
      a.setAttribute('aria-current', match ? 'true' : 'false');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      // Seleccionar la sección más visible hacia la parte superior
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible && visible.target && visible.target.id) {
        setActive(visible.target.id);
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -70% 0px',
      threshold: [0, 0.1, 0.5, 1.0],
    }
  );

  sections.forEach((sec) => observer.observe(sec));
});


