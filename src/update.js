const app = require("./app.js")

function update(msg, model) {
    switch (msg) {
      case app.MSGS.ADD:
        return model + 1;
      case app.MSGS.SUBTRACT:
        return model - 1;
      default:
        return model;
    }
}

module.exports = {
     udpate: update,
};