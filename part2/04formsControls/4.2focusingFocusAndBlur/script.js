"use strict";

;(function() {
    let log = console.log.bind(console);

    input.onblur = function() {
        if (!input.value.includes('@')) {
            input.classList.add('invalid');
            error.innerHTML = 'Пожалуйста, введите правильный email.'
        }
    };

    input.onfocus = function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error.innerHTML = "";
        }
    };
    
})();