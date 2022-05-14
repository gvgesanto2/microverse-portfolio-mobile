export default class ContactFormViewManager {
  constructor(contactFormId) {
    this.contactForm = document.getElementById(contactFormId);
  }

  getFormInputValue(inputName) {
    return this.contactForm.elements[inputName].value;
  }

  getFormElements() {
    const formElems = this.contactForm.elements;
    const formElemsArr = [];
    for (let i = 0; i < formElems.length; i += 1) {
      if (formElems[i].nodeName !== 'BUTTON') {
        formElemsArr.push(formElems[i]);
      }
    }
    return formElemsArr;
  }

  submit() {
    this.contactForm.submit();
  }

  setAllFormElemsStatus(status) {
    this.getFormElements().forEach((formElem) => this.setFormElemStatus(formElem.name, status));
  }

  setFormElemStatus(inputName, status) {
    switch (status) {
      case 'success':
        this.contactForm.elements[inputName].classList.add(
          'a-data-input--is-success',
        );
        break;
      case 'error':
        this.contactForm.elements[inputName].classList.add(
          'a-data-input--is-error',
        );
        break;
      default:
        if (
          this.contactForm.elements[inputName].classList.contains(
            'a-data-input--is-success',
          )
        ) {
          this.contactForm.elements[inputName].classList.remove(
            'a-data-input--is-success',
          );
        }
        if (
          this.contactForm.elements[inputName].classList.contains(
            'a-data-input--is-error',
          )
        ) {
          this.contactForm.elements[inputName].classList.remove(
            'a-data-input--is-error',
          );
        }
    }
  }
}
