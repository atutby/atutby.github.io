let links = document.querySelectorAll('a');
links[0].textContent = links[0].href;
console.dir( links[0] );
links.forEach(
  (elem) => {
    console.log(elem);
    elem.target = '_blank';
  }
)