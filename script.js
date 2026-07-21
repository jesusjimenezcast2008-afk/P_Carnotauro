document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menuList = document.querySelector('.menu-list');

  if (hamburger && menuList) {
    hamburger.addEventListener('click', () => {
      menuList.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => io.observe(el));
  } else {
    // Fallback: marcar todo como visible si no hay soporte
    reveals.forEach(el => el.classList.add('visible'));
  }
});
