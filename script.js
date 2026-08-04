document.addEventListener('DOMContentLoaded', () => {
  const Toggle = document.querySelector('.toggle');
  const menu = document.querySelector('.unordered');

  Toggle.addEventListener('click', () => {
    Toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  faders.forEach(el => observer.observe(el));
});