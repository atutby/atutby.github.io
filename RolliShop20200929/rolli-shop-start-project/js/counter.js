window.addEventListener('click', function (event) {
    if ( event.target.hasAttribute('data-action')) {
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        } else if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }
        }
    }
})



// const btnPlus = document.querySelector('[data-action="plus"]');
// const btnMinus = document.querySelector('[data-action="minus"]');

// btnPlus.addEventListener('click', function(event) {
//    const counterWrapper = event.target.closest('.counter-wrapper');
//    const counter = counterWrapper.querySelector('[data-counter]');
//    counter.innerText = ++counter.innerText;
// })

// btnMinus.addEventListener('click', function(event) {
//     const counterWrapper = event.target.closest('.counter-wrapper');
//     const counter = counterWrapper.querySelector('[data-counter]');

//     if(parseInt(counter.innerText) > 1) {
//         counter.innerText = --counter.innerText;
//     }
// })