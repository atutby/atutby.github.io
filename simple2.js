for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log( document.body.childNodes[i] );
}

console.log(document.body.hasChildNodes());

for (let node of document.body.childNodes) {
  console.log(node);
}

console.log( document.body.childNodes );