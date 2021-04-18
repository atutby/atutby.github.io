"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

{
  function f() {
    let count = 0;

    let obj = {
      go: function () {
        count++;
      },
      show: function () {
        return count;
      },
    };

    return obj;
  }

  let message = f();
  message.go();
  message.go();
  message.go();
  message.go();
  message.go();

  log(message.show());
}

{
  let localVariable = "localVariable";
  log(localVariable);
}

{
  let localVariable = "localVariable";
  log(localVariable);
}

for (let i = 1; i <= 10; i++) {
  if (i === 4) continue;
  log(i);
}

{
  document.writeln(
    '<a href="https://learn.javascript.ru/closure#sborka-musora">Сборка мусора</a>'
  );

  let value = "Сюрприз";

  function f() {
    let value = "Ближайшее значение";

    function g() {
      // debugger;
    }

    return g;
  }
  let g = f();
  g();
}

{
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };

    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();
  log(counter.up());
  log(counter.up());
  log(counter.down());
}

{
  function sum(a) {
    return function (b) {
      return a + b;
    };
  }
  log(sum(1)(2));
  log(sum(5)(-1));
}

{
  log("= Фильтрация с помощью функции =");
  function inBetween(a, b) {
    return (item) => item >= a && item <= b;
  }

  function inArray(arr) {
    return function (item) {
      return arr.includes(item);
    };
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  log(arr.filter(inBetween(3, 6))); // 3, 4, 5, 6
  log(arr.filter(inArray([1, 2, 10]))); // 1, 2
}

{
  function show() {
    document.writeln("<br>");
    for (let i of users) {
      document.writeln(i.name + " " + i.age + " " + i.surname + ",");
    }
  }

  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];
  show();

  users.sort((a, b) => (a.name > b.name ? 1 : -1));
  show();

  users.sort((a, b) => (a.age > b.age ? 1 : -1));
  show();

  function byField(str) {
    return (a, b) => {
      if (str === "surname") {
        return a.surname > b.surname ? 1 : -1;
      }
      if (str === "name") {
        return a.name > b.name ? 1 : -1;
      }
      if (str === "age") {
        return a.age > b.age ? 1 : -1;
      }
    };
  }

  users.sort(byField("age"));
  show();
}

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let k = i;
    let shooter = function () {
      log(k);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
army[0]();
army[5]();
