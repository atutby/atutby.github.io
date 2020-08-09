/*
* этот файл берет все ссылки и делает их открывающимися в новой вкладке
*
*/

let links = document.querySelectorAll('a');
links[0].textContent = links[0].href;
links.forEach(
  (elem) => {
    console.log(elem);
    elem.target = '_blank';
  }
)