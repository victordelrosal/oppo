document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-icon');
  const menu  = document.querySelector('.menu-items');

  // toggle menu open/close
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // close when clicking outside
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('open')) {
      burger.classList.remove('open');
      menu.classList.remove('open');
    }
  });

  // smooth scroll for each link
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      burger.classList.remove('open');
      menu.classList.remove('open');
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
});
