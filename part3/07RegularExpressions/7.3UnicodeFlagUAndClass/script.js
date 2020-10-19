"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

(function () {
  log("😄".length); // 2
  log("𝒳".length); // 2

  let str = "A ბ ㄱ";
  log(str);

  log(str.match(/\p{L}/gu)); // ["A", "ბ", "ㄱ"]
  log(str.match(/\p{L}/g)); // null
})();
