const divEmptyBasket = document.getElementById('emptyBasket')
const divNotEmptyBasket = document.getElementById('notEmptyBasket')

const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
const divNumber = document.getElementById('number')
const divCommonNumber = document.getElementById('commonNumber')
const divAddButton = document.getElementById('addButton')

let currentNumber = parseInt(divNumber.innerText)
let currentInBasket = 0

divNotEmptyBasket.style.display = 'none'

buttonMinus.onclick = () => {
	if (currentNumber > 1) {
		currentNumber -= 1
	}

	divNumber.innerText = currentNumber
	divCommonNumber.innerText = currentNumber
}

buttonPlus.onclick = () => {
	currentNumber += 1
	divNumber.innerText = currentNumber
	divCommonNumber.innerText = currentNumber
}

divAddButton.onclick = () => {
	currentInBasket += currentNumber

	if (currentInBasket) {
		divNotEmptyBasket.style.display = 'block'
		divEmptyBasket.style.display = 'none'
	}
}