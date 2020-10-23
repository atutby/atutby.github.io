const morning = require("./morning");
const evening = require("./evening");

module.exports = {
  getMorningMessage: function () {
    console.log(morning);
  },
  getEveningMessage: function () {
    console.log(evening);
  },
};
