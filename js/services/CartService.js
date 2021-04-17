

export function getCart() {
    return window.localStorage.getItem('cart');
}

export function addToCart(teddy) {
    if (!window.localStorage.getItem('cart')){
        window.localStorage.setItem('cart', "{}")
    }
    let productKey = `${teddy._id}-${stringWithoutSpace(teddy.color)}`
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    if (cart[productKey]) {
        cart[productKey].quantity += 1;
    } else {
        teddy.quantity = 1;
        cart[productKey] = teddy;
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCounter()
};

export function addOneToCart(productKey) {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    cart[productKey].quantity += 1;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter()
    return cart;
};

export function removeOneFromCart(productKey) {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    if (cart[productKey].quantity > 1) {
        cart[productKey].quantity -= 1;
    } else {
        delete cart[productKey];
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter()
    return cart;
};

export function clearCart() {
    window.localStorage.clear();
    updateCartCounter();
    calculateTotal();
}

export function checkOut() {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    console.log("cart", cart)
}

export function calculateTotal(cart) {
    let totalField = document.querySelector("#total");
    if (cart) {
        let total = 0;
        for (const [key, teddy] of Object.entries(cart)) {
            total += teddy.price * teddy.quantity
        }
        totalField.innerHTML = `${total} €`
    } else {
        totalField.innerHTML = ""
    }
}

export function removeLineFromCart(id) {
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

export function stringWithoutSpace(string) {
    return string.replace(/\s/g,"");
}