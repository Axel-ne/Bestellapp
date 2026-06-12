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

function getBasketTemplate(basketHTML, subtotal, deliveryFee, total) {
    let orderContentHTML = basketHTML;
    let basketSubtotal = subtotal
        ? subtotal.toFixed(2).replace(".", ",")
        : "0,00";
    let displayDelivery = deliveryFee
        ? deliveryFee.toFixed(2).replace(".", ",")
        : "0,00";
    let displayTotal = total ? total.toFixed(2).replace(".", ",") : "0,00";

    return /*html*/ `
        <section class="basket-wrapper">
            <div class="basket-content">
                <div class="close-btn-wrapper">
    <button onclick="toggleBasket()">✕</button>
</div>
                <h2>Your Basket</h2>
                
                <section id="order-content">
                    ${orderContentHTML}
                </section>
                
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td id="subtotal"></td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td id="delivery"></td>
                        </tr>
                        <tr class="total">
                            <td><strong>Total</strong></td>
                            <td id="total"><strong></strong></td>
                        </tr>
                    </tbody>
                </table>
                
                <button onclick="renderOrderDialog()" id="buy-btn" class="buy-btn">Buy now (<span id="displayTotal"></span>)</button>
            </div>
        </section>
    `;
}

function basketItemTemplate(dish, index, dishTotal ) {
    return /*html*/`
        <div class="basket-card" id="basket-card-${index}">
            <div class="basket-card-text">
                <p><strong>${dish.name}</strong></p>
                <button
                    onclick="removeItem(${index})"
                    class="conter-btn">
                    🗑
                </button>
            </div>
            <div class="price-add-container">
                <div>
                    <p id="dishTotal${index}">${dishTotal
                        .toFixed(2)
                        .replace(".", ",")}€</p>
                </div>
                <div class="basket-card-counter">
                    <button
                        onclick="minusAmount(${index})"
                        class="conter-btn">
                        -
                    </button>
                    <p id="countNumber${index}">
                        ${dish.amount}
                    </p>
                    <button
                        onclick="plusAmount(${index})"
                        class="conter-btn">
                        +
                    </button>
                </div>
            </div>
        </div>
    `;
}

function orderDialog() {
    return /*html*/ `
        <dialog>
            <div class="dialog-section">
                <div class="dialog-btn-container">
                    <button onclick="closeDialog()">X</button>
                </div>
                <div class="dialog-content">
                    <img src="./assets/imgs/ChatGPT Image Nov 24, 2025, 11_51_33 AM 1.png" alt="">
                    <h2>Order confirmed!</h2>
                    <p>Your food is on the way!</p>
                </div>
            </div>
        </dialog>
    `;
}
