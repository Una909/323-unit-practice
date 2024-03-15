const createElement = require("virtual-dom/create-element");
const { diff, patch } = require("virtual-dom");


const MSGS = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
  };


  function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(dispatch, model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);
    function dispatch(msg) {
      model = update(msg, model);
      const updatedView = view(dispatch, model);
      const patches = diff(currentView, updatedView);
      rootNode = patch(rootNode, patches);
      currentView = updatedView;
    }
  }
  

  module.exports = {
    MSGS:MSGS,
    app:app
  }