for (let i = 0; i < document.body.children.length; i++) {
  console.log( document.body.children[i] );
}


console.log(document.body.hasChildNodes());

for (let node of document.body.childNodes) {
  console.log(node);
}

console.log( document.body.children );

console.log( document.body.parentNode === document.documentElement );

console.log( document.body.children[0] );
console.log( document.body.children[1] );
console.log( document.body.children[1].lastElementChild );

// https://plnkr.co/edit/I9r1HY4w0O0uRfmR?p=preview&preview
/*
  https://learn.javascript.ru/dom-navigation
  dom-navigation
*/
let table = document.body.children[2];

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
