let div = document.createElement('div');
div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
let simpleDiv = document.querySelector('.simpleDiv');
simpleDiv.append(div);

let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML = 'Bye there!';
div.after(div2);
setTimeout(() => div2.remove(), 2000);

//==============================================
ol.before(document.createElement('hr'), 'before');
ol.after('after', document.createElement('hr'));
let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // вставить liFirst в начало <ol>
let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);
ol.textContent = 'I am here!!!'


second.after(first);
first.after(document.createElement('hr'));


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

console.log(table.rows);
function name() {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}
function surName() {
    let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
}
let ageName = true;
function age() {
    if (ageName) {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => +rowA.cells[2].innerHTML > +rowB.cells[2].innerHTML ? -1 : 1);

        table.tBodies[0].append(...sortedRows);
        ageName = !ageName;
    } else {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => +rowA.cells[2].innerHTML > +rowB.cells[2].innerHTML ? 1 : -1);

        table.tBodies[0].append(...sortedRows);
        ageName = !ageName;
    }    
}

document.querySelector('#table tr th:nth-child(1)').addEventListener('click', name)
document.querySelector('#table tr th:nth-child(2)').addEventListener('click', surName)
document.querySelector('#table tr th:nth-child(3)').addEventListener('click', age)


one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


// node.reaplaceWith(...nodes or strings)
bigFive.replaceWith('<h3>replaceWith BigFive<h3>')