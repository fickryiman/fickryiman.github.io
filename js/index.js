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

function gotoLive(url) {
  location.href=url;
}

// modal for project details
const projects = [
  {
    number: 1,
    title: 'Community website',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'screenshot/conference-website.png',
    imageUrlDesktop: '',
    descriptions: 'This project is about creating a responsive website to showcase community event, activities and agenda.',
    seeLive: 'https://fickryiman.github.io/capstone-project-one',
    seeSource: 'https://github.com/fickryiman/capstone-project-one',
  },
  {
    number: 2,
    title: 'Awesome Books',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'screenshot/awesome-books.png',
    imageUrlDesktop: 'screenshot/awesome-books.png',
    descriptions: '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list. Built with Javascript, HTML & CSS.',
    seeLive: 'https://fickryiman.github.io/awesome-books/',
    seeSource: 'https://github.com/fickryiman/awesome-books',
  },
  {
    number: 3,
    title: 'Awesome Books',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'images/Rectangle27.png',
    imageUrlDesktop: '',
    descriptions: '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list. Built with Javascript, HTML & CSS.',
    seeLive: 'https://fickryiman.github.io/awesome-books/',
    seeSource: 'https://github.com/fickryiman/awesome-books',,
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
    title: 'Todo List App',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'screenshot/todo-list-2.png',
    imageUrlDesktop: '',
    descriptions: `"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. Built with Javascript, HTML & CSS.`,
    seeLive: 'https://fickryiman.github.io/ToDo-List/',
    seeSource: 'https://github.com/fickryiman/ToDo-List',
  },
  {
    number: 6,
    title: 'Todo List App',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'screenshot/todo-list-2.png',
    imageUrlDesktop: '',
    descriptions: `"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. Built with Javascript, HTML & CSS.`,
    seeLive: 'https://fickryiman.github.io/ToDo-List/',
    seeSource: 'https://github.com/fickryiman/ToDo-List',
  },
  {
    number: 7,
    title: 'Todo List App',
    techStack: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    imageUrlMobile: 'screenshot/todo-list-2.png',
    imageUrlDesktop: '',
    descriptions: `"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. Built with Javascript, HTML & CSS.`,
    seeLive: 'https://fickryiman.github.io/ToDo-List/',
    seeSource: 'https://github.com/fickryiman/ToDo-List',
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
const modalDescriptions = document.querySelector('.modal-project-details-text-h3');
const seeLive = document. querySelector('.see-live');
const seeSource = document. querySelector('.see-source');

function modalRendering(number) {
  const project = projects[number];
  modalProjectName.innerHTML = `${project.title}`;

  modalImageSlider.setAttribute('src', `${project.imageUrlMobile}`);
  modalImageList.forEach((element) => {
    element.setAttribute('src', `${project.imageUrlMobile}`);
  });
  modalDescriptions.textContent = `${project.descriptions}`;

  seeLive.href = `${project.seeLive}`;
  seeSource.href= `${project.seeSource}`;
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
xModalButton.addEventListener('click', closeModalProjectDetails);



// const detailsButtons = document.querySelectorAll('.modal-buttons-p');
// detailsButtons.forEach((button) => {
//   button.addEventListener('click', closeModalProjectDetails);
// });

// modal for project details

// email form validation
const formInput = document.querySelector('#getting-started-form');
const emailInput = document.querySelector('#email-input');
const buttonForm = document.querySelector('.button-get-started');
const errorMessage = document.querySelector('.email-form-error-message');

function showEmailValidationLowerCaseError(e) {
  if ((emailInput.value).match(/[A-Z]/)) {
    errorMessage.style.display = 'block';
    e.preventDefault();
  } else {
    errorMessage.style.display = 'none';
    formInput.addEventListener('submit', formInput.reset());
  }
}

buttonForm.addEventListener('click', showEmailValidationLowerCaseError);
