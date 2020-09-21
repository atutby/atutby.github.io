"use strict";
let log = console.log.bind(console);

function rndNum(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

for (let i = 0; i<6; i++) {
    log(rndNum(1, 6));
}

;(function() {
//your code here...

})();