"use strict";

;(function() {
    let log = console.log.bind(console);
//your code here...

let i = 0;

let start = Date.now();

function count() {
    for (let j = 0; j < 1e9; j++) {
        i++;
    }

    alert("Done in " + (Date.now() - start) + 'ms');
}

const button = document.querySelector('button');

button.addEventListener('click', count);

})();