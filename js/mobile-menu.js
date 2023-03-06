const hamburger = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-navigation');
const defaultNav = document.querySelector('.navigation-menu');
const xButton = document.querySelector('.img-x');

function displayMobileMenu() {
  defaultNav.style.display = 'none';
  mobileNav.style.display = 'unset';
}

function hideMobileMenu() {
  mobileNav.style.display = 'none';
  defaultNav.style.display = 'unset';
}

hamburger.addEventListener('click', displayMobileMenu);
xButton.addEventListener('click', hideMobileMenu);