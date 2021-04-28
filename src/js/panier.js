import '../scss/style.scss'
import { clearCart, removeLineFromCart, updateCartCounter, stringWithoutSpace, displayTotal, addOneToCart, removeOneFromCart, checkOut, getCart, calculateTotalCartPrice } from "./services/CartService.js"
let tableBody = document.querySelector("#cart-list-body");
let cart = getCart();

buildCartList(cart);
displayTotal(calculateTotalCartPrice(cart));
updateCartCounter()


document.querySelector("#clear-cart").addEventListener("click", () => {
 clearCart();
 tableBody.innerHTML = "";
})

function buildCartList(cart) {
    if (cart) {
    for (const [key, teddy] of Object.entries(cart)) {
        let tr = document.createElement("tr");
        let colorWithoutSpace = stringWithoutSpace(teddy.color);
        let lineTotalWithDecimals = (teddy.price * teddy.quantity).toFixed(2);
        tr.innerHTML = `
        <td class="col-sm-8 col-md-5">
        <div class="media">
            <a class="thumbnail pull-left mr-3" href="./article.html?articleId=${teddy._id}"> <img class="media-object img-panier" src="${teddy.imageUrl}" alt="image de l'ourson ${teddy.name}"> </a>
            <div class="media-body overflow-hidden">
                <h2 class="media-heading"><a href="./article.html?articleId=${teddy._id}">${teddy.name}</a></h2>
                
            </div>
        </div>
        </td>
        
        <td class="col-sm-1 col-md-1" style="text-align: center">
        ${teddy.color}
        </td>
        <td class="col-sm-1 col-md-1" style="text-align: center">
        <button id="add-one-to-cart-${teddy._id}-${colorWithoutSpace}"  class="btn btn-primary add-button p-3"><span>+</span></button>
        ${teddy.quantity}
        <button  class="btn btn-danger add-button p-3" id="remove-one-from-cart-${teddy._id}-${colorWithoutSpace}"><span>-</span></button>
        </td>
        <td class="col-sm-1 col-md-1 text-center"><strong>${teddy.price} €</strong></td>
        <td class="col-sm-1 col-md-1 text-center"><strong>${lineTotalWithDecimals} €</strong></td>
        <td class="col-sm-1 col-md-1">
        <button  id="remove-btn-${teddy._id}-${colorWithoutSpace}" class="btn btn-danger">
             Retirer
        </button></td>
    `;
    tableBody.appendChild(tr)
    
    // remove line
    document.querySelector(`#remove-btn-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = removeLineFromCart(`${teddy._id}-${colorWithoutSpace}`);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        displayTotal(calculateTotalCartPrice(newCart));
        updateCartCounter();
    });

    // add one of selected to cart
    document.querySelector(`#add-one-to-cart-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = addOneToCart(`${teddy._id}-${colorWithoutSpace}`, cart);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        displayTotal(calculateTotalCartPrice(newCart));
        updateCartCounter();
    });
    
    // remove one of selected from cart
    document.querySelector(`#remove-one-from-cart-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = removeOneFromCart(`${teddy._id}-${colorWithoutSpace}`, cart);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        displayTotal(calculateTotalCartPrice(newCart));
        updateCartCounter();
    });

};
}
}

// finaliser l'achat
document.querySelector("#finaliser-achat").addEventListener("click", () => {
    checkOut();
});