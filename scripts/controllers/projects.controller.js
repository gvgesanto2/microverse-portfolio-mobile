import projects from '../data/projects.data.js';
import ProjectsView from '../view/projects.view.js';

const PROJECT_BTN_ID_BASE = 'projectBtn';

export default class ProjectsController {
  constructor() {
    this.projects = projects;
    this.projectsView = new ProjectsView(
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
  }

  execute() {
    this.projectsView.render();
    this.projects.forEach(({ id }) => {
      const projectBtn = document.getElementById(`${PROJECT_BTN_ID_BASE}-${id}`);

      projectBtn.addEventListener('click', () => console.log(`Im the project: ${id}`));
    });
  }
}
