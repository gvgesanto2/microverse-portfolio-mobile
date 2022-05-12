import ProjectsGridView from '../views/ProjectsGridView.js';
import ProjectPopupView from '../views/ProjectPopupView.js';
import { addEventHandler } from '../utils/event-handler.js';

const PROJECT_BTN_ID_BASE = 'projectBtn';

export default class ProjectsController {
  constructor(bodyElemId, mainContainerId, worksSectionId, projects) {
    this.bodyElemId = bodyElemId;
    this.mainContainerId = mainContainerId;
    this.worksSectionId = worksSectionId;
    this.projects = projects;
  }

  buildProjectsGrid() {
    const projectsGridView = new ProjectsGridView(
      this.worksSectionId,
      this.projects.map(
        ({
          id,
          name,
          description,
          featuredImg,
          client,
          topic,
          yearOfCreation,
          techs,
        }) => ({
          projectBtnId: `${PROJECT_BTN_ID_BASE}-${id}`,
          name,
          description,
          featuredImg,
          client,
          topic,
          yearOfCreation,
          techs,
          isReversed: id % 2 === 0,
        }),
      ),
    );
    projectsGridView.render();
    this.projects.forEach(({ id }) => {
      addEventHandler(`${PROJECT_BTN_ID_BASE}-${id}`, 'click', () => {
        this.buildProjectPopup(id - 1);
      });
    });
  }

  buildProjectPopup(projectIndex) {
    const popupCancelBtnId = 'popup-cancel-btn';
    const projectPopupView = new ProjectPopupView(
      this.mainContainerId,
      this.bodyElemId,
      { ...this.projects[projectIndex], popupCancelBtnId },
    );
    projectPopupView.render();

    addEventHandler(popupCancelBtnId, 'click', () => {
      projectPopupView.remove();
    });
  }
}
