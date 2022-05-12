const addEventHandler = (elemId, eventType, callback) => {
  const elem = document.getElementById(elemId);
  elem.addEventListener(eventType, callback);
};

const addEventHandlerToElemGroup = (groupSelector, eventType, callback) => {
  const elems = document.querySelectorAll(groupSelector);
  elems.forEach((elem) => {
    elem.addEventListener(eventType, callback);
  });
};

export { addEventHandler, addEventHandlerToElemGroup };
