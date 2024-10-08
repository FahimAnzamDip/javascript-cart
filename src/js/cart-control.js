const shoppingCart = document.getElementById('shopping-cart');
const cartBackdrop = shoppingCart.querySelector('#cart-backdrop');
const cartClose = shoppingCart.querySelector('#cart-close');
const continueShopping = shoppingCart.querySelector('#continue-shopping');
const cartOpen = document.getElementById('cart-open');

function hideCart() {
    shoppingCart.classList.add('hidden');
}

function showCart() {
    shoppingCart.classList.remove('hidden');
}

cartBackdrop.addEventListener('click', hideCart);
cartClose.addEventListener('click', hideCart);
continueShopping.addEventListener('click', hideCart);
cartOpen.addEventListener('click', showCart);
