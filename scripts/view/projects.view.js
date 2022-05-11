const genProjectTechsListMarkup = (techs) => {
  const projectTechsListMarkup = `
    <ul class="m-overflow-list">
      ${techs.reduce((acc, tech) => `${acc}<li><span class="a-label">${tech}</span></li>`, '')}
    </ul>
  `;
  return projectTechsListMarkup;
};

const genProjectMarkup = ({
  projectBtnId, name, description, featuredImg, client, topic, yearOfCreation, techs, isReversed,
}) => {
  const projectMarkup = `
    <div class="o-card ${isReversed ? 'o-card--reverse' : ''}">
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
        ${genProjectTechsListMarkup(techs)}

        <div class="o-card__action">
          <button id=${projectBtnId} type="button" class="a-btn">See Project</button>
        </div>
      </div>
    </div>
  `;
  return projectMarkup;
};

export default class ProjectsView {
  constructor(parentElemId, projects) {
    this.parentElement = document.getElementById(parentElemId);
    this.projectsMarkup = projects.reduce((acc, project) => `${acc}${genProjectMarkup(project)}`, '');
  }

  render() {
    this.parentElement.innerHTML = this.projectsMarkup;
  }
}
