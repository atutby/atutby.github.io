let div = document.querySelector('div');

div.outerHTML = '<p>New element</p>';

alert( div.outerHTML );

div = document.querySelector('p');
alert( div.outerHTML );