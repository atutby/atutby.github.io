class Shop {
	constructor () {
		this.goods = []

		this.divShopWindow = document.getElementById('shopWindow')
	}

	async loadGoods () {
		this.goods = []

		const answer = await fetch('js/goods.json')
		const dataItems = await answer.json()

		for (const dataItem of dataItems) {
			const good = new Good(dataItem)
			this.goods.push(good)
		}
	}

	showGoods () {
		this.divShopWindow.innerHTML = ''
		for (const good of this.goods) {
			this.divShopWindow.appendChild(good.html)
		}
	}
}