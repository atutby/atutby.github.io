let div = document.createElement('div');
div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
let simpleDiv = document.querySelector('.simpleDiv');
simpleDiv.append(div);

// setTimeout(() => div.remove(), 2000);

second.after(first);

let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML = 'Bye there!';

div.after(div2);

function getListContent() {
    // let fragment = new DocumentFragment();
    let result = [];

    for(let i=1; i<=3; i++) {
        let li = document.createElement('li');
        li.append(i);
        // fragment.append(li);
        result.push(li);
    }

    // return fragment;
    return result;
}
ul.append(...getListContent());