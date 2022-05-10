const homeMainContainer = document.getElementById('home-main-container');
const hamburguerMenu = document.getElementById('hamburger-menu');
const hamburgerBtn = document.getElementById('hamburguer-btn');
const hamburgerCancelBtn = document.getElementById('hamburger-cancel-btn');
const hamburguerMenuLinks = document.querySelectorAll(
  '.o-hamburger-menu__link'
);

// Show Hamburguer Menu event handler
const showHamburgerMenu = () => {
  if (hamburguerMenu.classList.contains('o-hamburger-menu--is-hidden')) {
    hamburguerMenu.classList.remove('o-hamburger-menu--is-hidden');
  }
  homeMainContainer.classList.add('u-is-blurred');
};

hamburgerBtn.addEventListener('click', showHamburgerMenu);
