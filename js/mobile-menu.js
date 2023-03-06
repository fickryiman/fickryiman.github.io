let hamburger = document.querySelector('.hamburger-icon');
let mobile_nav = document.querySelector('.mobile-navigation');
let default_nav = document.querySelector('.navigation-menu');
let x_button = document.querySelector('.img-x')

function displayMobileMenu() {
  default_nav.style.display = 'none';
  mobile_nav.style.display = 'unset';
}

function hideMobileMenu() {
  mobile_nav.style.display = 'none';
  default_nav.style.display = 'unset';
}

hamburger.addEventListener('click', displayMobileMenu);
x_button.addEventListener('click', hideMobileMenu);