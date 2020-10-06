const itemsUrl = 'http://localhost:3000/json/db.json';

function getItems(url) {
	return fetch(url).then(answer => answer.json() )
}

function getItemsFromCart() {
	return JSON.parse( localStorage.getItem('cart') )
}
main();

async function main(){

	const items = await getItems(itemsUrl)
	const itemsFromCart = await getItemsFromCart()

	console.log(itemsFromCart);

	const state = {
		items: items,
		cart: itemsFromCart
	}

	const productsContainer = document.querySelector('#productsMainContainer')
	const cartItemsContainer = document.querySelector('#cartItemsHolder')
	const cartEmptyNotification = document.querySelector('#cartEmpty');
	const cartTotal = document.querySelector('#cartTotal')
	const makeOrder = document.querySelector('#makeOrder')
	const cart = document.querySelector('#cart')
	const cartTotalPrice = document.querySelector('#cartTotalPrice')
	const deliveryPriceContainer = document.querySelector('#deliveryPriceContainer')
	const deliveryMinimalFree = 600
			
	const renderItem = function (item) {

		const markup = `
			<div class="col-md-6">
				<div class="card mb-4" data-productid="${item.id}">
					<img class="product-img" src="img/roll/${item.img}" alt="${item.title}">
					<div class="card-body text-center">
						<h4 class="item-title">${item.title}</h5>
						<p><small class="text-muted">${item.itemsInBox} шт.</small></p>

						<div class="details-wrapper">
							<div class="items">
								<div class="items__control" data-click="minus">-</div>
								<div class="items__current" data-count>${item.counter}</div>
								<div class="items__control" data-click="plus">+</div>
							</div>

							<div class="price">
								<div class="price__weight">${item.weight}г.</div>
								<div class="price__currency">${item.price} ₽</div>
							</div>
						</div>

						<button data-click="addToCart" type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
						
					</div>
				</div>
			</div>`; 

		productsContainer.insertAdjacentHTML('beforeend', markup);
	}

	const renderItemInCart = function (item) {

		const markup = `
			<div class="cart-item" data-productid="${item.id}">
				<div class="cart-item__top">
					<div class="cart-item__img">
						<img src="img/roll/${item.img}" alt="${item.title}">
					</div>
					<div class="cart-item__desc">
						<div class="cart-item__title">${item.title}</div>
						<div class="cart-item__weight">${item.itemsInBox} шт. / ${item.weight}г.</div>
						<div class="cart-item__details">
							<div class="items items--small">
								<div class="items__control" data-click="minus">-</div>
								<div class="items__current" data-count>${item.items}</div>
								<div class="items__control" data-click="plus">+</div>
							</div>
							<div class="price">
								<div class="price__currency">${item.price} ₽</div>
							</div>
						</div>
					</div>
				</div>
			</div>`; 

		cartItemsContainer.insertAdjacentHTML('beforeend', markup);
	}

	state.items.forEach(renderItem);

	const itemUpdateCounter = function(id, type){
		const itemIndex = state.items.findIndex( function(element){
			if ( element.id == id) {
				return true;
			}
		})
		let count = state.items[itemIndex].counter;

		if ( type == 'minus') {
			if ( count - 1 > 0) {
				count--;
				state.items[itemIndex].counter = count;
			}
		}

		if ( type == 'plus') {
			count++;
			state.items[itemIndex].counter = count;
		}

	}

	const itemUpdateCounterInCart = function(id, type){
		const itemIndex = state.cart.findIndex( function(element){
			if ( element.id == id) {
				return true;
			}
		})
		let count = state.cart[itemIndex].items ; 

		if ( type == 'minus') {
			if ( count - 1 > 0) {
				count--;
				state.cart[itemIndex].items = count; 
				localStorage.setItem('cart', JSON.stringify(state.cart));
			}
		}

		if ( type == 'plus') {
			count++;
			state.cart[itemIndex].items = count;
			localStorage.setItem('cart', JSON.stringify(state.cart));
		}

		calculateTotalPrice();

	}



	const itemUpdateViewCounter = function(id){


		// 1) По ID найти  объект продукта в state.items 
		// для того чтобы получить значение его свойства counter

		const itemIndex = state.items.findIndex( function(element){
			if ( element.id == id) {
				return true;
			}
		})

		// Здесь значение счетчика из состояния нашего приложения
		const countToShow = state.items[itemIndex].counter // 3

		// 2) Обновить значение счетчика в разметке
		// 2.1) Найти место в разметке  где находится счетчик  // [data-count]
		const currentProduct = productsContainer.querySelector('[data-productid="' + id + '"');
		const counter = currentProduct.querySelector('[data-count]');
		// 2.2) Обновить  значение счетчика в разметке
		counter.innerText = countToShow;

	}


	const itemUpdateViewCounterInCart = function(id){

		const itemIndex = state.cart.findIndex( function(element){
			if ( element.id == id) {
				return true;
			}
		})

		const countToShow = state.cart[itemIndex].items 

		const currentProduct = cart.querySelector('[data-productid="' + id + '"');
		const counter = currentProduct.querySelector('[data-count]');
		counter.innerText = countToShow;


	}

	function checkCart () {
		if ( state.cart.length > 0 ) {
			
			cartEmptyNotification.style.display = 'none';
			cartTotal.style.display = 'block';
			makeOrder.style.display = 'block';

		} else {

		}
	}


	const addToCart = function (id) {

		const itemIndex = state.items.findIndex( function(element){
			if ( element.id == id) {
				return true;
			}
		})

		// Проверить есть ли в корзине товар с такми  ID
		const itemIndexInCart = state.cart.findIndex( function(element){
			if ( element.id == id) {
				return true;
			}
		})

		// console.log(itemIndexInCart);

		//  Если такого товара еще нет в корзине
		if ( itemIndexInCart == -1 ) {
			const newItem = {
				id: state.items[itemIndex].id,
				title: state.items[itemIndex].title,
				price: state.items[itemIndex].price,
				weight: state.items[itemIndex].weight,
				itemsInBox: state.items[itemIndex].itemsInBox,
				img: state.items[itemIndex].img,
				items: state.items[itemIndex].counter
			}

			state.cart.push( newItem );
		} else {
			//  Если такой  товар УЖЕ ЕСТЬ в корзине
			state.cart[itemIndexInCart].items += state.items[itemIndex].counter;
		}

		localStorage.setItem('cart', JSON.stringify(state.cart));

		state.items[itemIndex].counter = 1;
		itemUpdateViewCounter(id);

		cartItemsContainer.innerHTML = "";
		state.cart.forEach(renderItemInCart);

		checkCart();
		calculateTotalPrice();

		// console.log(state.cart);

	}

	const calculateDelivery = function (){
		if ( state.totalPrice >=  deliveryMinimalFree ) {
			deliveryPriceContainer.innerText = 'бесплатно';
			deliveryPriceContainer.classList.add('free');
		} else {
			deliveryPriceContainer.innerText = 300;
			deliveryPriceContainer.classList.remove('free');
		}
	}

	function calculateTotalPrice (){
		let totalPrice = 0;

		state.cart.forEach( function(element){
			const thisPrice = element.items * element.price;
			totalPrice += thisPrice;
		});

		state.totalPrice = totalPrice;


		const formatedPrice =  new Intl.NumberFormat('ru-RU').format(totalPrice);

		cartTotalPrice.innerText = formatedPrice;
		calculateDelivery();
		// console.log(totalPrice);

	}

	productsContainer.addEventListener('click', function(e){

		if ( e.target.matches('[data-click="minus"]') ) {
			const id = e.target.closest('[data-productid]').dataset.productid;
			itemUpdateCounter(id, 'minus');
			itemUpdateViewCounter(id);

		} else if ( e.target.matches('[data-click="plus"]') ) {
			const id = e.target.closest('[data-productid]').dataset.productid;
			itemUpdateCounter(id, 'plus');
			itemUpdateViewCounter(id);
		} else if ( e.target.matches('[data-click="addToCart"]') ) {
			const id = e.target.closest('[data-productid]').dataset.productid;
			addToCart(id);
		}

	});

	cart.addEventListener('click', function(e){

		if ( e.target.matches('[data-click="minus"]') ) {
			const id = e.target.closest('[data-productid]').dataset.productid;
			itemUpdateCounterInCart(id, 'minus');
			itemUpdateViewCounterInCart(id);
		} else if ( e.target.matches('[data-click="plus"]') ) {
			const id = e.target.closest('[data-productid]').dataset.productid;
			itemUpdateCounterInCart(id, 'plus');
			itemUpdateViewCounterInCart(id);
		}

	});

	if ( state.cart.length > 0) {
		state.cart.forEach(renderItemInCart);
		checkCart();
		calculateTotalPrice();
	}

}

