/*
* этот файл берет все ссылки и делает их открывающимися в новой вкладке
*
*/

let links = document.querySelectorAll('a');

links.forEach(
  (elem) => {
    if (!elem.textContent || elem.textContent == ' '){
      elem.textContent = elem.href;
    }
    // console.log(elem);
    elem.target = '_blank';
  }
)

console.log(window.location.href)