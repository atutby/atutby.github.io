class Good {
	constructor (params) {
		this.name = params.name
		this.src = params.src
		this.size = params.size
		this.weight = params.weight
		this.price = params.price
		this.count = 1

		this.commonCount = 0
		this.commonPrice = 0

		this.html = null
		this.basketHtml = null

		Good.all.push(this)
		if (Good.html) {
			this.viewInit()
		}
	}

	viewInit () {
		let str = Good.html.slice()

		for (const substr of str.match(/{{% \w+ %}}/g)) {
			str = str.replace(substr, this[substr.substr(4, substr.length - 8)])
		}

		const temp = document.createElement('div')
		temp.innerHTML = str

		this.html = temp.firstChild
		for (const element of this.html.querySelectorAll('[data-onclick]')) {
			const handlerName = element.dataset.onclick
			element.addEventListener('click', () => this[handlerName]())
		}
	}

	viewUpdate () {
		let str = Good.html.slice()

		for (const substr of str.match(/{{% \w+ %}}/g)) {
			str = str.replace(substr, this[substr.substr(4, substr.length - 8)])
		}

		const temp = document.createElement('div')
		temp.innerHTML = str

		const html = temp.firstChild
		this.html.parentNode.replaceChild(html, this.html)
		this.html = html

		for (const element of this.html.querySelectorAll('[data-onclick]')) {
			const handlerName = element.dataset.onclick
			element.addEventListener('click', () => this[handlerName]())
		}
	}

	basketViewInit () {
		let str = Good.basketHtml.slice()

		for (const substr of str.match(/{{% \w+ %}}/g)) {
			str = str.replace(substr, this[substr.substr(4, substr.length - 8)])
		}

		const temp = document.createElement('div')
		temp.innerHTML = str

		this.basketHtml = temp.firstChild

		for (const element of this.basketHtml.querySelectorAll('[data-onclick]')) {
			const handlerName = element.dataset.onclick
			element.addEventListener('click', () => this[handlerName]())
		}
	}

	basketViewUpdate () {
		let str = Good.basketHtml.slice()

		for (const substr of str.match(/{{% \w+ %}}/g)) {
			str = str.replace(substr, this[substr.substr(4, substr.length - 8)])
		}

		const temp = document.createElement('div')
		temp.innerHTML = str

		const basketHtml = temp.firstChild
		this.basketHtml.parentNode.replaceChild(basketHtml, this.basketHtml)
		this.basketHtml = basketHtml

		for (const element of this.basketHtml.querySelectorAll('[data-onclick]')) {
			const handlerName = element.dataset.onclick
			element.addEventListener('click', () => this[handlerName]())
		}
	}

	plus () {
		this.count += 1
		this.viewUpdate()
	}

	minus () {
		if (this.count - 1 > 0) {
			this.count -= 1
			this.viewUpdate()			
		}
	}

	commonPlus () {
		this.commonCount += 1
		this.commonPrice = this.commonCount * this.price
		this.basketViewUpdate()

		this.commonUpdate()
	}

	commonMinus () {
		this.commonCount -= 1
		this.commonPrice = this.commonCount * this.price
		this.basketViewUpdate()

		this.commonUpdate()
	}

	addToBasket () {}

	commonUpdate () {}

	static async init () {
		const goodCard = await fetch('js/goodCard.html')
		Good.html = await goodCard.text()

		const goodBasketCard = await fetch('js/goodBasketCard.html')
		Good.basketHtml = await goodBasketCard.text()

		for (const good of Good.all) {
			good.viewInit()
			good.basketViewInit()
		}
	}
}

Good.html = ''
Good.basketHtml = ''
Good.all = []