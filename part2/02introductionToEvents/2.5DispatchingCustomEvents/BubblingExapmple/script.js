function hide() {
    let event = new CustomEvent("hide", {
        cancelable: true
    });
    if (!rabbit.dispatchEvent(event)) {
        alert('The action was prevented by a handler')
    } else {
        rabbit.hidden = true;
    }
}

function show() {
    rabbit.hidden = false;
}

rabbit.addEventListener('hide', function(event) {
    if (confirm("Call preventDefault?")) {
        event.preventDefault();
    }
})

// setInterval(function() { button.dispatchEvent(new Event('click')); }, 5000)
// setInterval( show , 8000);
