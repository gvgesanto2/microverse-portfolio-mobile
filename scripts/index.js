import ProjectsController from './controllers/ProjectsController.js';
import projects from './data/projects.data.js';
import homepageMetaData from './data/homepage.data.js';
import HamburgerMenuController from './controllers/HamburgerMenuController.js';

const {
  bodyElemId, mainContainerId, worksSectionId, hamburgerMenuMetaData,
} = homepageMetaData;

const projectsController = new ProjectsController(
  bodyElemId,
  mainContainerId,
  worksSectionId,
  projects,
);
projectsController.buildProjectsGrid();

const hamburgerMenuController = new HamburgerMenuController({
  ...hamburgerMenuMetaData,
  mainContainerId,
});
hamburgerMenuController.initHamburgerMenu();
