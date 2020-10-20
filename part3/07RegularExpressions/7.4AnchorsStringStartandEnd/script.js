"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

(function () {
  //your code here...
  let str1 = "Mary had a little lamb";
  log(/^Mary/.test(str1));

  let str2 = "It's fleece was white as snow";
  log(/snow$/.test(str2));

  let goodInput = "12:34";
  let badInput = "123:35";
  let regexp = /^\d\d:\d\d$/;
  log(regexp.test(goodInput));
  log(regexp.test(badInput));
})();
