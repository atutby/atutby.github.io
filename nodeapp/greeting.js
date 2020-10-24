console.log("greeting module");

let currentDate = new Date();
module.exports.date = currentDate;

global.date = currentDate + " +cat";

module.exports.getMessage = function () {
  let hour = currentDate.getHours();
  if (hour > 16) return "Добрый вечер, " + name;
  else if (hour > 10) return "Добрый день, " + name;
  else return "Доброе утро, " + name;
};

module.exports.name = "Alice";