export function getCart() {
    return window.localStorage.getItem('cart');
}

export function addToCart(teddy) {
    if (!window.localStorage.getItem('cart')){
        window.localStorage.setItem('cart', "{}")
    }
    
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    if (cart[teddy._id]) {
        cart[teddy._id].quantity += 1;
    } else {
        teddy.quantity = 1;
        cart[teddy._id] = teddy;
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCounter()
}

export function clearCart() {
    window.localStorage.clear();
    updateCartCounter()
}

export function removeFromCart(id) {
    let cartToSlim = JSON.parse(window.localStorage.getItem('cart'));
    
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