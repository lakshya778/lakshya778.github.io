// ============================================
// Animates skill bars to their data-percent
// value when they scroll into view.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percent = fill.getAttribute('data-percent') || 0;
        fill.style.width = percent + '%';
        observer.unobserve(fill); // animate only once
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
});