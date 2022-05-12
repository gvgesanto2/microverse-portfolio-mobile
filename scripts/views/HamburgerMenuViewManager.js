import MainContainerViewManager from './MainContainerViewManager.js';

export default class HamburgerMenuViewManager {
  constructor(hamburgerMenuId, mainContainerId) {
    this.hamburgerMenu = document.getElementById(hamburgerMenuId);
    this.mainContainerViewManager = new MainContainerViewManager(mainContainerId);
  }

  show() {
    if (this.hamburgerMenu.classList.contains('o-hamburger-menu--is-hidden')) {
      this.hamburgerMenu.classList.remove('o-hamburger-menu--is-hidden');
    }
    this.mainContainerViewManager.blur();
  }

  hide() {
    this.mainContainerViewManager.unblur();
    this.hamburgerMenu.classList.add('o-hamburger-menu--is-hidden');
  }
}
