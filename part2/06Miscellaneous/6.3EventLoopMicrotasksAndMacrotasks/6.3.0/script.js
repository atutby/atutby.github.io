"use strict";
let log = console.log.bind(console);

;(function() {
    let i = 0;

    function count() {
        do {
            i++;
            progress.innerHTML = i;
        } while (i % 1e3 != 0);

        if (i < 1e7) {
            setTimeout(count);
        }
    }

    count();
})();