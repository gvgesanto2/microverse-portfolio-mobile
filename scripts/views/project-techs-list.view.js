export default class ProjectTechsListView {
  constructor(parentElemId, techs) {
    this.parentElement = document.getElementById(parentElemId);
    this.techs = techs;
  }

  genMarkup() {
    const projectTechsListMarkup = `
    <ul class="m-overflow-list">
      ${this.techs.reduce(
    (acc, tech) => `${acc}<li><span class="a-label">${tech}</span></li>`,
    '',
  )}
    </ul>
  `;
    return projectTechsListMarkup;
  }

  render() {
    const projectTechsListMarkup = this.genMarkup();
    this.parentElement.insertAdjacentHTML('afterbegin', projectTechsListMarkup);
  }
}
