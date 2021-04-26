

export function addToCart(teddy) {
    if (!window.localStorage.getItem('cart')){
        window.localStorage.setItem('cart', "{}")
    }
    let productKey = `${teddy._id}-${stringWithoutSpace(teddy.color)}`
    let cart = getCart();
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
    let cart = getCart();
    cart[productKey].quantity += 1;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter()
    return cart;
};

export function removeOneFromCart(productKey) {
    let cart = getCart();
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
    displayTotal(calculateTotalCartPrice());
}

export function checkOut() {
    let cart = getCart();
    console.log("cart", cart)
}


export function displayTotal(total) {
    let totalField = document.querySelector("#total");
    totalField.innerHTML = `${total} €`;
}

export function calculateTotalCartPrice(cart) {
    let totalPrice = 0.00;
    if (cart != null && typeof cart === "object") {
        let keys = Object.keys(cart);
        keys.forEach(key => {
            totalPrice += cart[key].price * cart[key].quantity;
        });
    }
    return totalPrice.toFixed(2);
}

export function removeLineFromCart(id) {
    let cartToSlim = getCart();
    delete cartToSlim[id];
    
    window.localStorage.setItem('cart', JSON.stringify(cartToSlim));
    updateCartCounter()
    return cartToSlim;
}

export function updateCartCounter() {
    let cartSize = getCartSize(getCart());
    document.querySelector("#cart-counter").innerText = cartSize;
}

export function getCart() {
    return JSON.parse(window.localStorage.getItem('cart'));
}

export function getCartSize(cart) {
    let quantitySum = 0;
    if (cart != null && typeof cart === "object") {
        let keys = Object.keys(cart);
        keys.forEach(key => {
            quantitySum += cart[key].quantity;
        });
    }
    return quantitySum;
}

export function stringWithoutSpace(string) {
    return string.toString().replace(/\s/g,"");
}