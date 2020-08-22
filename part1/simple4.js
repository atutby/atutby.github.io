console.log( elem.getAttribute("About") ); // 'Elephant'

elem.setAttribute('Test', 123);

console.log( elem.outerHTML );

for (let attr of elem.attributes) {
    console.log( `${attr.name} = ${attr.value}` );
}

