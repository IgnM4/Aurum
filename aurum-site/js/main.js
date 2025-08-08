// ----------------------------------------------------
// Funcionalidades principales para Constructora Aurum
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // Menú responsive
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Animación fade-in al hacer scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Filtros de proyectos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      projectItems.forEach(item => {
        const match = category === 'all' || item.dataset.category === category;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  // Slider de testimonios simple
  const testimonials = document.querySelectorAll('.testimonial-item');
  let index = 0;
  if (testimonials.length) {
    testimonials[0].classList.add('active');
    setInterval(() => {
      testimonials[index].classList.remove('active');
      index = (index + 1) % testimonials.length;
      testimonials[index].classList.add('active');
    }, 5000);
  }
});
