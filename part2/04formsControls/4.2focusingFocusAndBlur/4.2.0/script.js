"use strict";

;(function() {
    let log = console.log.bind(console);

    input.onblur = function() {
        if (!this.value.includes('@')) {
            this.classList.add('invalid');
            this.classList.add('error');
            // input.focus();
            error.innerHTML = 'Пожалуйста, введите правильный email.'
        } else {
            this.classList.remove('error');
        }
    };

    let focus = 0;
    input.onfocus = function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
        }
        error.innerHTML = "";
        log(focus++)
    };
    
})();