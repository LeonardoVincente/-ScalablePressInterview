function init() {
    const numberOfCarts = 13;
    addCarts(numberOfCarts);
}

function addCarts(numberOfCarts) {
    const mainSectionElement = document.getElementById('mainSection');
    createImageCards(numberOfCarts).forEach(element => {
        mainSectionElement.appendChild(element);
    });
}


function createImageCards(numberOfCarts) {
    const cartElements = [];
    for (let i = 0; i < numberOfCarts; i++) {
        let cardElement = document.createElement('div');
        cardElement.classList.add('imageCard');

        let imageElement = document.createElement('img');
        imageElement.setAttribute('src', './cart.png');

        let bottomText = document.createElement('div');
        bottomText.textContent = 'Item Title';

        cardElement.appendChild(imageElement);
        cardElement.appendChild(bottomText);
        cartElements.push(cardElement);
    }
    return cartElements;
}

window.onload = init;