const genErrorMsgMarkup = (msgElemId, msg) => `
    <div id=${msgElemId} class="a-status-msg a-status-msg--is-error">${msg}</div>
  `;

export default class ErrorMsgView {
  constructor(siblingElemId) {
    this.id = 'status-msg-error';
    this.siblingElem = document.getElementById(siblingElemId);
  }

  genMarkup(msg) {
    return genErrorMsgMarkup(this.id, msg);
  }

  render(msg) {
    const errorMsgMarkup = this.genMarkup(msg);
    this.siblingElem.insertAdjacentHTML('afterend', errorMsgMarkup);
  }

  remove() {
    const errorMsg = document.getElementById(this.id);

    if (errorMsg) {
      errorMsg.remove();
    }
  }
}
