export default class MainContainerViewManager {
  constructor(mainContainerId) {
    this.mainContainer = document.getElementById(mainContainerId);
  }

  blur() {
    this.mainContainer.classList.add('u-is-blurred');
  }

  unblur() {
    if (this.mainContainer.classList.contains('u-is-blurred')) {
      this.mainContainer.classList.remove('u-is-blurred');
    }
  }
}
