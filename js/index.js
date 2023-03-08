// toggle show-hide mobile menu
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
mobileNav.addEventListener('click', hideMobileMenu);

// modal for project details
const projectsDetails = document.querySelectorAll('.see-project');
const modal = document.querySelector('.modal-project');
const xModalButton = document.querySelector('.x-cross-modal');
const detailsButtons = document.querySelectorAll('.modal-buttons-p');

function displayProjectDetails() {
  modal.style.display = 'block';
}

function closeProjectDetails() {
  modal.style.display = 'none';
}

projectsDetails.forEach((project) => {
  project.addEventListener('click', displayProjectDetails);
});

xModalButton.addEventListener('click', closeProjectDetails);

detailsButtons.forEach((button) => {
  button.addEventListener('click', closeProjectDetails);
});
