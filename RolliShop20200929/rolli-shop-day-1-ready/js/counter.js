window.addEventListener('click', function (event) {
    if ( event.target.hasAttribute('data-action')) {
		// От кнопки по которой кликнули находим обертку текущего счетчика
		const counterWrapper = event.target.closest('.counter-wrapper');
		// От обертки счетчика находим div c значением счетчика
        const counter = counterWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
			console.log('PLUS!!!!');
			// Изменяем текст в счетчике увеличивая его на 1
			counter.innerText = ++counter.innerText;
		} else if (event.target.dataset.action === 'minus') {
			console.log('MINUS!!!!');
			// Уменьшаем счетчик только до 1
			if (parseInt(counter.innerText) > 1) {
				// Изменяем текст в счетчике уменьшая его на 1
				counter.innerText = --counter.innerText;
			}
		}
	}
})



/*
// Находим кнопку Плюс и Минус
const btnPlus = document.querySelector('[data-action="plus"]');
const btnMinus = document.querySelector('[data-action="minus"]');

// Слушаем клик по кнопке Плюс
btnPlus.addEventListener('click', function (event) {
    // От кнопки Плюс находим обертку текущего счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');
    // От обертки счетчика находим div c значением счетчика
    const counter = counterWrapper.querySelector('[data-counter]');
    // Изменяем текст в счетчике увеличивая его на 1
    counter.innerText = ++counter.innerText;
});

btnMinus.addEventListener('click', function (event) {
	// От кнопки Минус находим обертку текущего счетчика
	const counterWrapper = event.target.closest('.counter-wrapper');
	// От обертки счетчика находим div c значением счетчика
    const counter = counterWrapper.querySelector('[data-counter]');

    // Уменьшаем счетчик только до 1
    if (parseInt(counter.innerText) > 1) {
		// Изменяем текст в счетчике уменьшая его на 1
		counter.innerText = --counter.innerText;
    }

});
*/