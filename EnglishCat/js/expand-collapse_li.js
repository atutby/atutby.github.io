//Развернуть/Свернуть список ссылок на js?  --- Expand / collapse the list of js links?
//https://jsfiddle.net/sasaha2015/me8y97u0/5/
// https://qna.habr.com/q/590846

document.getElementsByClassName("control")[0].onclick = function () {
  document.getElementsByClassName("crossing")[0].classList.toggle("expand");
};
