const update =  require("./update.js")
const application =  require("./app.js")
const model = require("./model.js")
const view =  require("./view.js")

const rootNode = document.getElementById("app");
application.app(model.initModel, update.udpate, view.view, rootNode);