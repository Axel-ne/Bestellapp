function init() {
    renderBurgerCards();
    renderBasket();
}

function renderBurgerCards() {
    let burgerContainerRef = document.getElementById("burger-container");
    burgerContainerRef.innerHTML = "";
    for (let i = 0; i < myDishes.length; i++) {
        burgerContainerRef.innerHTML += cardTemplate(myDishes[i], i);
    }
}

function addToBasket(index) {
    if (!myDishes[index].genre) {
        myDishes[index].amount++;
        renderBasket();
    }
}

function removeItem(index) {
    myDishes[index].amount = 0;
    document.getElementById(`basket-card-${index}`)
    ?.remove();
    basketSummary();
}

function plusAmount(index) {
    myDishes[index].amount++;
    document.getElementById(`countNumber${index}`).textContent =
        myDishes[index].amount;
    basketSummary();
}

function minusAmount(index) {
    if (myDishes[index].amount <= 0) return;
    myDishes[index].amount--;
    if (myDishes[index].amount === 0) {
        const card = document.getElementById(
            `basket-card-${index}`
        );
        console.log(card);
        if (card) {
            card.remove();
        }
        basketSummary();
        return;
    }
    document.getElementById(`countNumber${index}`)
        .textContent = myDishes[index].amount;
    document.getElementById(`dishTotal${index}`)
    .textContent = 
    (parseFloat(myDishes[index].price) * myDishes[index].amount)
            .toFixed(2)
            .replace(".", ",") + "€";
    basketSummary();
}

function calculateBasketTotal() {
    let total = 0;

    for (let i = 0; i < myDishes.length; i++) {
        let dish = myDishes[i];

        if (dish.amount > 0) {
            total += parseFloat(dish.price) * dish.amount;
        }
    }

    return total;
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

            basketHTML += basketItemTemplate(
                dish,
                i,
                dishTotal
            );
        }
    }

    const deliveryFee = subtotal > 0 ? 4.9 : 0;
    const total = subtotal + deliveryFee;
    basketContainerRef.innerHTML = getBasketTemplate(
        basketHTML,
        subtotal,
        deliveryFee,
        total
    );
    basketSummary(subtotal, deliveryFee, total );

    updateMobileBasketBadge(totalCount);
}

function basketSummary() {
    const subtotal = calculateBasketTotal();
    const deliveryFee = subtotal > 0 ? 4.9 : 0;
    const total = subtotal + deliveryFee;
    document.getElementById("subtotal").textContent =
        subtotal.toFixed(2).replace(".", ",");
    document.getElementById("delivery").textContent =
        deliveryFee.toFixed(2).replace(".", ",");
    document.getElementById("total").textContent =
        total.toFixed(2).replace(".", ",");
    document.getElementById("displayTotal").textContent =
        total.toFixed(2).replace(".", ",");
}

function renderOrderDialog() {
    clearBasket();
    let dialogContainerRef =
        document.getElementById("dialog-container");
    dialogContainerRef.innerHTML = orderDialog();
    openDialog();
}

function clearBasket() {
    for (let i = 0; i < myDishes.length; i++) {
        if (!myDishes[i].genre) {
            myDishes[i].amount = 0;
        }
    }

    renderBasket();
    updateMobileBasketBadge(0);
}

function openDialog() {
    let dialog =
        document.querySelector("dialog");
    dialog.showModal();
}

function closeDialog() {
    let dialog =
        document.querySelector("dialog");
    dialog.close();
}



function updateMobileBasketBadge(count) {
    const badge =
        document.getElementById("mobile-basket-badge");
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
    let basketRef =
        document.getElementById("basket");
    basketRef.classList.toggle("show-basket");
}