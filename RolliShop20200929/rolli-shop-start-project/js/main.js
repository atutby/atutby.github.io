const itemsUrl =
  "http://127.0.0.1:5500/RolliShop20200929/rolli-shop-start-project/js/db.json";

function getItems(url) {
  return fetch(url).then((answer) => answer.json());
}

main()

async function main() {
  const items = await getItems(itemsUrl);

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

    productsContainer.insertAdjacentHTML("afterbegin", markup);
  };

  state.items.forEach(renderItem);

  const itemUpdateCounter = function (id, type) {
    const itemIndex = itemIndex2(id);

    let count = state.items[itemIndex].counter;

    if (type === "minus") {
      if (count - 1 > 0) {
        count--;
        state.items[itemIndex].counter = count;
      }
    }

    if (type === "plus") {
      count++;
      state.items[itemIndex].counter = count;
    }
  };

  function itemIndex2(id) {
    return state.items.findIndex(function (element) {
      if (element.id == id) {
        return true;
      }
    });
  }

  const itemUpdateViewCounter = function (id) {
    const itemIndex = itemIndex2(id);

    productsContainer
      .querySelector(`[data-productid="${id}"]`)
      .querySelector("[data-count]").innerText = state.items[itemIndex].counter;
  };

  productsContainer.addEventListener("click", function (e) {
    const id = e.target.closest("[data-productid]").dataset.productid;

    // if (e.target.matches("[data-click='minus']")) {
    if (e.target.dataset.click === "minus") {
      itemUpdateCounter(id, "minus");
      itemUpdateViewCounter(id);
    } else if (e.target.matches('[data-click="plus"]')) {
      itemUpdateCounter(id, "plus");
      itemUpdateViewCounter(id);
    }
  });
}
