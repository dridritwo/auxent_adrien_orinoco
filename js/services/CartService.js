export function getCart() {
    return window.localStorage.getItem('cart');
}

export function addToCart(teddy) {
    if (!window.localStorage.getItem('cart')){
        window.localStorage.setItem('cart', "{}")
    }
    console.log(teddy.color)
    let productKey = `${teddy._id}-${teddy.color}`
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    if (cart[productKey]) {
        cart[productKey].quantity += 1;
    } else {
        teddy.quantity = 1;
        cart[productKey] = teddy;
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCounter()
}

export function clearCart() {
    window.localStorage.clear();
    updateCartCounter()
}

export function removeLineFromCart(id) {
    let cartToSlim = JSON.parse(window.localStorage.getItem('cart'));
    console.log(cartToSlim)
    delete cartToSlim[id];
    
    window.localStorage.setItem('cart', JSON.stringify(cartToSlim));
    updateCartCounter()
    return cartToSlim;
}

export function updateCartCounter() {
    let cartCounter = document.querySelector("#cart-counter");
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    let quantitySum = 0
    if (cart) {
        for (const [key, teddy] of Object.entries(cart)) {
            quantitySum += teddy.quantity
        };
    }
    if (cartCounter) {
        cartCounter.innerText = quantitySum;
    }
}