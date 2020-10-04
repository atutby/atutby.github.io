const items = [
  {
    id: 1,
    title: "Калифорния хит",
    price: 300,
    weight: 180,
    itemsInBox: 6,
    img: "california-hit.jpg",
    counter: 1,
  },
  {
    id: 2,
    title: "Калифорния темпура",
    price: 250,
    weight: 205,
    itemsInBox: 6,
    img: "california-tempura.jpg",
    counter: 1,
  },
  {
    id: 3,
    title: 'Запечённый ролл "Калифорния"',
    price: 230,
    weight: 182,
    itemsInBox: 6,
    img: "zapech-california.jpg",
    counter: 1,
  },
  {
    id: 4,
    title: "Филадельфия",
    price: 320,
    weight: 230,
    itemsInBox: 6,
    img: "philadelphia.jpg",
    counter: 1,
  },
];

const state = {
  items: items,
  cart: [],
};

const productsContainer = document.querySelector("#productsMainContainer");

const renderItem = function (item) {
  const markup = `
    <div class="col-md-6">
      <div class="card mb-4" data-productid="${item.id}">
          <img src="img/roll/${item.img}" alt="${item.title}" class="product-img">
          <div class="card-body text-center">
              <h4 class="item-title">${item.title}</h4>
              <p><small class="text-muted">${item.itemsInBox} шт.</small></p>

              <div class="details-wrapper">
                  <div class="items">
                      <button class="items__control" data-click="minus">-</button>
                      <div class="items__current" data-count>${item.counter}</div>
                      <button class="items__control" data-click="plus">+</button>
                  </div>

                  <div class="price">
                      <div class="price__weight">${item.weight} г.</div>
                      <div class="price__currency">${item.price} ₽</div>
                  </div>
              </div>
                  <button type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>
              </div>
          </div>
      </div>
  </div>  
  `;

  productsContainer.insertAdjacentHTML("beforeend", markup);
};

state.items.forEach(renderItem);
