"use strict";

;(function() {
    let log = console.log.bind(console);
//your code here...

let i = 0;

let start = Date.now();

function count() {

    if (i < 1e9 - 1e6) {
        setTimeout(count);
    }

    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        alert("Done in " + (Date.now() - start) + 'ms');
    }
    
}

const button = document.querySelector('button');

button.addEventListener('click', count);

})();