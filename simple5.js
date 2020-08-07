let div = document.createElement('div');
div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
let simpleDiv = document.querySelector('.simpleDiv');
simpleDiv.append(div);

setTimeout(() => div.remove(), 2000);