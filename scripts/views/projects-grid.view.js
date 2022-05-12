import ProjectTechsListView from './project-techs-list.view.js';

const genProjectMarkup = ({
  projectBtnId, name, description, featuredImg, client, topic, yearOfCreation, techs, isReversed,
}) => {
  const projectTechsListView = new ProjectTechsListView(null, techs);
  const projectMarkup = `
    <article class="o-card ${isReversed ? 'o-card--reverse' : ''}">
      <img
        src=${featuredImg}
        alt="Image of the ${name} Project"
        class="o-card__img"
      />
      <div class="o-card__content">
        <header class="o-card__header">
          <h2 class="a-title a-title--sm">${name}</h2>
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
        </header>

        <p class="o-card__text a-text a-text--sm">
          ${description}
        </p>
        ${projectTechsListView.genMarkup()}

        <div class="o-card__action">
          <button id=${projectBtnId} type="button" class="a-btn">See Project</button>
        </div>
      </div>
    </article>
  `;
  return projectMarkup;
};

export default class ProjectsGridView {
  constructor(parentElemId, projects) {
    this.parentElement = document.getElementById(parentElemId);
    this.projects = projects;
  }

  genMarkup() {
    return this.projects.reduce((acc, project) => `${acc}${genProjectMarkup(project)}`, '');
  }

  render() {
    const projectsMarkup = this.genMarkup();
    this.parentElement.insertAdjacentHTML('afterbegin', projectsMarkup);
  }
}
