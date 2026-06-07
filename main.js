function init() {
    renderBurgerCards();
    renderBasket();
}

function renderBurgerCards() {
    let burgerContainerRef = document.getElementById("burger-container");
    burgerContainerRef.innerHTML = "";

    for (let i = 0; i < myDishes.length; i++) {
        let aktuellesGericht = myDishes[i];
        burgerContainerRef.innerHTML += cardTemplate(aktuellesGericht);
    }
}

function renderBasket() {
    let basketContainerRef = document.getElementById("basket");
    basketContainerRef.innerHTML = "";

    basketContainerRef.innerHTML = getBasketTemplate();
}

