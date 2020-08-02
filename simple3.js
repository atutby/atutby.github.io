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