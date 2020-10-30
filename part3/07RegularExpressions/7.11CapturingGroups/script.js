"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

(function () {
  //your code here...
  let str = "Gogogo John!";

  // ?: исключает go из запоминания
  let regexp = /(?:go)+ (\w+)/i;

  let result = str.match(regexp);

  log(result[0]);
  log(result[1]);
  log(result.length);
})();

(function () {
  let results = "<h1> <h2>".matchAll(/<(.*?)>/gi);
  console.log(results);
  console.log(results[0]);
  results = Array.from(results);
  console.log(results[0]);
  console.log(results[1]);
})();
