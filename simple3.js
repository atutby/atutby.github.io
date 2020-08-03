let table = document.getElementById('age-table');
console.log( table );

table.getElementsByTagName('label');
// or
document.querySelectorAll('#age-table label');

// 3.
table.rows[0].cells[0];
// or
table.getElementsByTagName('td')[0];
// or
table.querySelector('td');


// 4. 
let formSearch = document.getElementsByName('search')[0];
// or
let formSearch2 = document.querySelector('form[name="search"]');
console.log(formSearch2);

// 5.
formSearch.querySelectorAll('input')[0];
formSearch.querySelector('input');

let inputs = formSearch.querySelectorAll('input')
console.log(inputs[inputs.length - 1]);