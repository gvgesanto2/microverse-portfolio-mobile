import { addEventHandler, addEventHandlerToElemGroup } from '../utils/event-handler.js';
import HamburgerMenuViewManager from '../views/HamburgerMenuViewManager.js';

export default class HamburgerMenuController {
  constructor({
    mainContainerId,
    hamburgerMenuId,
    hamburgerBtnId,
    hamburgerCancelBtnId,
    hamburguerMenuLinksSelector,
  }) {
    this.mainContainerId = mainContainerId;
    this.hamburgerMenuId = hamburgerMenuId;
    this.hamburgerBtnId = hamburgerBtnId;
    this.hamburgerCancelBtnId = hamburgerCancelBtnId;
    this.hamburguerMenuLinksSelector = hamburguerMenuLinksSelector;
  }

  initHamburgerMenu() {
    const hamburgerMenuViewManager = new HamburgerMenuViewManager(
      this.hamburgerMenuId,
      this.mainContainerId,
    );
    addEventHandler(this.hamburgerBtnId, 'click', () => {
      hamburgerMenuViewManager.show();
    });
    addEventHandler(this.hamburgerCancelBtnId, 'click', () => {
      hamburgerMenuViewManager.hide();
    });
    addEventHandlerToElemGroup(this.hamburguerMenuLinksSelector, 'click', () => {
      hamburgerMenuViewManager.hide();
    });
  }
}
