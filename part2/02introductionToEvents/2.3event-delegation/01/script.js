let selectedTd;

table.onclick = function(event) {
    let td = event.target.closest('td');

    if (!td) return;

    if (!table.contains(td)) return;

    // let target = event.target;

    // if (target.tagName != 'TD') return;

    highlight(td);
}

function highlight(td) {
    if (selectedTd) {
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight');
}

// alert('cat')