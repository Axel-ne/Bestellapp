function init() {
    renderBurgerCards();
    renderBasket();
}

function renderBurgerCards() {
    let burgerContainerRef = document.getElementById("burger-container");
    burgerContainerRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        let aktuellesGericht = myDishes[i];
        burgerContainerRef.innerHTML += cardTemplate(aktuellesGericht, i);
    }
}

function addToBasket(index) {
    if (!myDishes[index].genre) {
        myDishes[index].amount++;
        renderBasket();
    }
}

function changeAmount(index, change) {
    myDishes[index].amount += change;
    if (myDishes[index].amount < 0) myDishes[index].amount = 0;
    renderBasket();
}

function renderBasket() {
    let basketContainerRef = document.getElementById("basket");
    let subtotal = 0;
    let basketHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];
        if (dish.amount > 0) {
            let dishTotal = parseFloat(dish.price) * dish.amount;
            subtotal += dishTotal;
            basketHTML += basketItemTemplate(dish, i, dishTotal);
        }
    }

    let deliveryFee = subtotal > 0 ? 4.5 : 0.0;
    let total = subtotal + deliveryFee;

    basketContainerRef.innerHTML = getBasketTemplate(
        basketHTML,
        subtotal,
        deliveryFee,
        total,
    );
}
