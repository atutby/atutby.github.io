let elem = document.getElementById("coords-show-mark");

if (elem) {
    elem.onclick = function() {

        function createMessageUnder(elem, html) {
            let message = document.createElement('div')
            message.style.cssText = "position:fixed; color:red";

            let coords = elem.getBoundingClientRect();

            message.style.left = coords.left + "px";
            message.style.top = coords.bottom + "px";

            message.innerHTML = html;

            return message;
        }

        let message = createMessageUnder(elem, 'Hello, world!');
        document.body.append(message);
        setTimeout(() => message.remove(), 5000);
    }
}