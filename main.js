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
    let totalCount = 0;
    let basketHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];
        if (dish.amount > 0) {
            let dishTotal = parseFloat(dish.price) * dish.amount;
            subtotal += dishTotal;
            totalCount += dish.amount;
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

    updateMobileBasketBadge(totalCount);
}

function renderOrderDialog() {
    let dialogContainerRef = document.getElementById("dialog-container");
    dialogContainerRef.innerHTML = orderDialog();
    openDialog();
}

function openDialog() {
    let dialog = document.querySelector("dialog");
        dialog.showModal();
}

function closeDialog() {
    let dialog = document.querySelector("dialog");
        dialog.close();
}

function updateMobileBasketBadge(count) {
    const badge = document.getElementById("mobile-basket-badge");
    if (badge) {
        badge.innerText = count;
        if (count > 0) {
            badge.classList.add("has-items");
        } else {
            badge.classList.remove("has-items");
        }
    }
}

function toggleBasket() {
    let basketRef = document.getElementById("basket");
    basketRef.classList.toggle("show-basket");
}