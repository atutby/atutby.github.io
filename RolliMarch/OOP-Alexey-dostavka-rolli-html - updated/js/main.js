main()

async function main () {
	const shop = new Shop
	const basket = new Basket

	await Promise.all([
		Good.init(),
		shop.loadGoods()
	])

	shop.showGoods()

	// Note: лучше конечно бы использовать всплывающее событие, но как-то сложно будет для новичков
	for (const good of shop.goods) {
		good.addToBasket = () => {
			basket.addGood(good)
		}

		good.commonUpdate = () => {
			basket.updateGood(good)
		}
	}
}