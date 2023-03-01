const menuIcon = document.querySelector('.fa-bars');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

