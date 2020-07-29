
let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
  console.log(elem.innerHTML);
}

for (let elem of document.body.children) {
  if (elem.matches('a[href$="zip"]')) {
    console.log("The archive reference: " + elem.href)
  }
}

let chapter = document.querySelector('.chapter');

console.log(chapter.closest('.book'));
console.log(chapter.closest('.contents'));
console.log(chapter.closest('h1'));

let inputs = table.getElementsByTagName('input')
for (let input of inputs) {
  console.log( input.value + ': ' + input.checked );
}