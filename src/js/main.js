import '../assets/css/style.css';
import { getProducts } from '../db/products.js';
import './cart-control';
import { showNotificaiton } from './notifcation-control';

const products = getProducts();

const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('search');
const cartProductsCount = document.getElementById('cart-products-count');
const cartProductList = document.getElementById('cart-product-list');

const cart = [];

(function init() {
    renderProducts(productGrid, products);
    renderCartProducts(cartProductList, cart);
})();

function renderProducts(grid, products) {
    grid.innerHTML = '';

    products.forEach((product) => {
        const aElem = document.createElement('a');
        aElem.classList.add('group');
        aElem.innerHTML = `
                        <div
                            class="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200"
                        >
                            <img
                                src="${product.image}"
                                alt="Product Image"
                                class="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            ${product.name}
                        </h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">
                            $${product.price}
                        </p>
                        <button
                            id="add-to-cart"
                            data-id="${product.id}"
                            type="button"
                            class="mt-3 inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add to Cart
                            <svg
                                class="-mr-0.5 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>`;

        grid.appendChild(aElem);
        aElem.querySelector('#add-to-cart').addEventListener('click', addToCart);
    });
}

searchInput.addEventListener('input', (event) => {
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(event.target.value.toLowerCase()));
    renderProducts(productGrid, filteredProducts);
});

function addToCart(event) {
    const product = products.find((product) => product.id == event.currentTarget.dataset.id);
    const productExists = cart.find((item) => item.id == product.id);

    if (productExists) {
        productExists.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    cartProductsCount.innerText = cart.reduce((total, current) => {
        return (total += current.quantity);
    }, 0);

    renderCartProducts(cartProductList, cart);

    showNotificaiton('success', 'Successfully Added!', 'Your selected product has been added to the cart.');
}

function removeFromCart(event) {
    const index = cart.findIndex((product) => product.id == event.currentTarget.dataset.id);
    cart.splice(index, 1);

    cartProductsCount.innerText = cart.reduce((total, current) => {
        return (total += current.quantity);
    }, 0);

    renderCartProducts(cartProductList, cart);
}

function renderCartProducts(grid, cart) {
    grid.innerHTML = '';

    cart.forEach((item) => {
        const liElem = document.createElement('li');
        liElem.classList.add('flex', 'py-6');
        liElem.innerHTML = `
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="${item.image}"
                            alt="Product Image" />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                        <div>
                            <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">${item.name}</a>
                                </h3>
                                <p class="ml-4">${formatPrice(item.price * item.quantity)}</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                        </div>

                        <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-gray-500 font-medium">Qty: ${item.quantity}</p>

                            <div class="flex">
                                <button data-id="${item.id}" type="button" id="cart-item-remove" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                            </div>
                        </div>
                    </div>`;

        cartProductList.appendChild(liElem);
        liElem.querySelector('#cart-item-remove').addEventListener('click', removeFromCart);
    });

    const cartSubTotal = cart.reduce((total, current) => {
        return (total += current.price * current.quantity);
    }, 0);
    document.getElementById('cart-sub-total').innerText = formatPrice(cartSubTotal);

    if (cart.length > 0) {
        document.getElementById('cart-empty').classList.add('hidden');
    } else {
        document.getElementById('cart-empty').classList.remove('hidden');
    }
}

function formatPrice(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}
