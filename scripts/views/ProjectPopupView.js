import MainContainerViewManager from './MainContainerViewManager.js';
import ProjectTechsListView from './ProjectTechsListView.js';

const genProjectPopupMarkup = (
  projectPopupId,
  {
    name,
    fullDescription,
    popupCancelBtnId,
    featuredImg,
    client,
    topic,
    yearOfCreation,
    techs,
    liveLink,
    srcLink,
  },
) => {
  const projectTechsListView = new ProjectTechsListView(null, techs);
  const projectMarkup = `
    <div id=${projectPopupId} class="o-popup">
      <article class="o-popup__window">
        <header class="o-popup__header">
          <div class="o-popup__toolbar">
            <h2 class="a-title a-title--sm">${name}</h2>
            <button
              id=${popupCancelBtnId}
              class="o-popup__cancel-btn m-icon-btn"
              type="button"
            >
              <svg class="a-icon--md">
                <use xlink:href="img/sprite.svg#cancel"></use>
              </svg>
            </button>
          </div>
          <ul class="m-bull-list">
            <li>
              <h3 class="a-heading">${client}</h3>
            </li>
            <li>
              <span class="a-meta-info">${topic}</span>
            </li>
            <li>
              <span class="a-meta-info">${yearOfCreation}</span>
            </li>
          </ul>
          <img
            src=${featuredImg}
            alt="Image of the ${name} Project"
            class="o-popup__img"
          />
        </header>
        <div class="o-popup__content">
          <p class="a-text a-text--sm">
            ${fullDescription}
          </p>
          <div class="o-popup__content-right">
            ${projectTechsListView.genMarkup()}
            <div class="o-popup__action">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href=${liveLink}
                aria-label="See this project live"
                class="m-icon-btn--outline"
              >
                <span>See Live</span>
                <svg class="a-icon--md">
                  <use xlink:href="img/sprite.svg#export"></use>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href=${srcLink}
                aria-label="See the source code of this project"
                class="m-icon-btn--outline"
              >
                <span>See Source</span>
                <svg class="a-icon--md">
                  <use xlink:href="img/sprite.svg#github"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
  return projectMarkup;
};

export default class ProjectPopupView {
  constructor(mainContainerId, parentElemId, project) {
    this.projectPopupId = 'project-popup';
    this.mainContainerViewManager = new MainContainerViewManager(mainContainerId);
    this.parentElement = document.getElementById(parentElemId);
    this.project = project;
  }

  genMarkup() {
    return genProjectPopupMarkup(this.projectPopupId, this.project);
  }

  render() {
    const projectPopupMarkup = this.genMarkup();
    this.mainContainerViewManager.blur();
    this.parentElement.insertAdjacentHTML('afterbegin', projectPopupMarkup);
  }

  remove() {
    const projectPopup = document.getElementById(this.projectPopupId);
    this.mainContainerViewManager.unblur();

    if (projectPopup) {
      projectPopup.remove();
    }
  }
}
