"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

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

{
  let localVariable = "localVariable";
  log(localVariable);
}

{
  let localVariable = "localVariable";
  log(localVariable);
}

for (let i = 1; i <= 10; i++) {
	if (i === 4) continue
	log(i);
}
