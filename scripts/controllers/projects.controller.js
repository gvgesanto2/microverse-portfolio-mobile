import ProjectsGridView from '../views/projects-grid.view.js';
import ProjectPopupView from '../views/project-popup.view.js';

const PROJECT_BTN_ID_BASE = 'projectBtn';

export default class ProjectsController {
  constructor(projects) {
    this.projects = projects;
  }

  buildProjectsGrid() {
    const projectsGridView = new ProjectsGridView(
      'works',
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
      const projectBtn = document.getElementById(
        `${PROJECT_BTN_ID_BASE}-${id}`,
      );

      projectBtn.addEventListener('click', () => {
        this.buildProjectPopup(id - 1);
      });
    });
  }

  buildProjectPopup(projectIndex) {
    const popupCancelBtnId = 'popup-cancel-btn';
    const projectPopupView = new ProjectPopupView(
      'root',
      { ...this.projects[projectIndex], popupCancelBtnId },
    );
    projectPopupView.render();

    const popupCancelBtn = document.getElementById(popupCancelBtnId);
    popupCancelBtn.addEventListener('click', () => {
      projectPopupView.remove();
    });
  }
}
