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
const projects = [
  {
    number: 1,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle_21.png',
    imageUrlDesktop: '',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
  {
    number: 2,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle46.png',
    imageUrlDesktop: 'images/Rectangle_21_6.png',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
  {
    number: 3,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle27.png',
    imageUrlDesktop: '',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
  {
    number: 4,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle_21_4.png',
    imageUrlDesktop: '',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
  {
    number: 5,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle_21_5.png',
    imageUrlDesktop: '',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
  {
    number: 6,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle_21_5.png',
    imageUrlDesktop: '',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
  {
    number: 7,
    title: 'Project name goes here',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle_21_6.png',
    imageUrlDesktop: 'images/Rectangle_21_6.png',
    descriptions: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    ],
  },
];

const modal = document.querySelector('.modal-project');
const project1 = document.querySelector('.project-1');
const project2 = document.querySelector('.project-2');
const project3 = document.querySelector('.project-3');
const project4 = document.querySelector('.project-4');
const project5 = document.querySelector('.project-5');
const project6 = document.querySelector('.project-6');
const project7 = document.querySelector('.project-7');

const modalProjectName = document.querySelector('.modal-project-name');
const modalImageSlider = document.querySelector('.modal-img-slider-big');
const modalImageList = document.querySelectorAll('.modal-img-list-small');

function modalRendering(number) {
  const project = projects[number];
  modalProjectName.innerHTML = `${project.title}`;

  modalImageSlider.setAttribute('src', `${project.imageUrlMobile}`);
  modalImageList.forEach(element => {
    element.setAttribute('src', `${project.imageUrlMobile}`);
  });
  
}

project1.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(0);
});

project2.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(1);
});

project3.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(2);
});

project4.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(3);
});

project5.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(4);
});

project6.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(5);
});

project7.addEventListener('click', () => {
  modal.style.display = 'block';
  modalRendering(6);
});

function closeModalProjectDetails() {
  modal.style.display = 'none';
}

const xModalButton = document.querySelector('.x-cross-modal');

const detailsButtons = document.querySelectorAll('.modal-buttons-p');

xModalButton.addEventListener('click', closeModalProjectDetails);

detailsButtons.forEach((button) => {
  button.addEventListener('click', closeModalProjectDetails);
});

// modal for project details