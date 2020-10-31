"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

// Задача: Создать функцию parse(expr), которая принимает выражение и возвращает массив из трёх элементов
// Task: Create a function parse(expr) that takes an expression and returns an array of 3 items
// 1. The first number
// 2. The operator
// 3. The second number
(function () {
  function parse(expr) {
    let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

    let result = expr.match(regexp);

    if (!result) return [];
    result.shift();

    return result;
  }

  log(parse("-1.290 * 3.45   ")); // -1.23, *, 3.45
})();

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
