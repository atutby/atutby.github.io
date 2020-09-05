"use strict";
/*
document.forms.my;
document.forms[0];

*/

;(function() {

    let log = console.log.bind(console);

let form = document.forms.my;

let elem = form.elements.one;

log(elem.value);


form = document.forms[1];

let ageElems = form.elements.age;

log(ageElems[0]);

log(form.elements.login)
let fieldset = form.elements.userFields;
log(fieldset);
log(fieldset.elements.login === form.elements.login);
log(form.elements.login === form.login);
form.login.name = "username";
log(form.elements.login);
log(form.elements.username);
log(form.login.form);
log(form.username.form);
/*
input.value = "New value";
textarea.value = "New text";

input.checked = true;
*/

select.options[2].selected = true;
select.selectedIndex = 2;
select.value = 'banana';

let selected = Array.from(select2.options)
    .filter(option => option.selected)
    .map(option => option.value);

    log(selected);

})();