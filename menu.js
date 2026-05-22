document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuContainer = document.querySelector('.js-menu-container');

  if (openMenuBtn && closeMenuBtn && menuContainer) {
    openMenuBtn.addEventListener('click', () => {
      menuContainer.classList.add('is-open');
      openMenuBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
    });

    closeMenuBtn.addEventListener('click', () => {
      menuContainer.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    });
  }
});