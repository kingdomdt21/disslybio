document.addEventListener('DOMContentLoaded', () => {
  const floatElements = document.querySelectorAll('.float-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  floatElements.forEach(el => observer.observe(el));
  
});
