import { addEventHandler } from '../utils/event-handler.js';
import ContactFormViewManager from '../views/ContactFormViewManager.js';
import ErrorMsgView from '../views/ErrorMsgView.js';

const validateEmail = (email) => {
  if (email === email.toLowerCase() && email.trim() !== '') {
    return '';
  }
  return 'Invalid email! Email field should be in lowercase.';
};
const hasValue = (value) => {
  if (value.trim() !== '') {
    return '';
  }
  return 'Empty fields not allowed!';
};

export default class ContactFormController {
  constructor({ formId, formInputGroupId }) {
    this.formId = formId;
    this.formInputGroupId = formInputGroupId;
  }

  initContactForm() {
    addEventHandler(this.formId, 'submit', (event) => {
      event.preventDefault();
      const contactFormViewManager = new ContactFormViewManager(
        this.formId,
      );
      const errorMsgView = new ErrorMsgView(this.formInputGroupId);
      const formElems = contactFormViewManager.getFormElements();
      const errorMsgs = [];
      contactFormViewManager.setAllFormElemsStatus('default');
      errorMsgView.remove();

      formElems.forEach((formElem) => {
        let validateValue;
        if (formElem.type === 'email') {
          validateValue = validateEmail;
        } else {
          validateValue = hasValue;
        }
        const validateMsg = validateValue(formElem.value);
        if (validateMsg) {
          contactFormViewManager.setFormElemStatus(formElem.name, 'error');
          errorMsgs.push(`ERROR: ${validateMsg} - [${formElem.name} input field]`);
        } else {
          contactFormViewManager.setFormElemStatus(formElem.name, 'success');
        }
      });

      if (errorMsgs.length === 0) {
        contactFormViewManager.submit();
      } else {
        const fullErrorMsg = errorMsgs.reduce((acc, msg) => `${acc}${msg}<br>`, '');
        errorMsgView.render(fullErrorMsg);
      }
    });
  }
}
