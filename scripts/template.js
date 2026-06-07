

function cardTemplate(dish, index) {
    if (dish.genre) {
        return /*html*/ `
            <header class="card-header">
                <img class="genre-img" src="${dish.imgPath}" alt="">
                <h2>${dish.genre}</h2>
            </header>`;
    }
    return /*html*/ `
        <section class="card-content-section">
            <div class="card-content">
                <img src="${dish.imgs}" alt="">
                <h3 class="card-name">${dish.name}</h3>
                <p class="card-description">${dish.description}</p>
                <div class="card-price-wrapper">
                    <p class="card-price">${dish.price.replace(".", ",")}€</p>
                    <button onclick="addToBasket(${index})">Add to basket</button>
                </div>
            </div>
        </section> `;
}

function getBasketTemplate(){
    return /*html*/`
        <section class="basket-wrapper">
                    <div class="basket-content">
                        <div class="close-btn-wrapper">
                            <button class="close-btn"></button>
                        </div>
                        <h2>Your Basket</h2>
                        <div id="order-content"></div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>36,70€</td>
                                </tr>
                                <tr>
                                    <td>Delivery fee</td>
                                    <td>4,99€</td>
                                </tr>
                                <tr class="total">
                                    <td>Total</td>
                                    <td>41,69€</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="buy-btn">Buy now</button>
                    </div>
                </section>
    `
}
