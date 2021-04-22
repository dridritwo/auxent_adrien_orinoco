import { clearCart, removeLineFromCart, updateCartCounter, stringWithoutSpace, calculateTotal, addOneToCart, removeOneFromCart, checkOut, getCart } from "./services/CartService.js"
let tableBody = document.querySelector("#cart-list-body");
let cart = getCart();

buildCartList(cart);
calculateTotal(cart);
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
        tr.innerHTML = `
        <td class="col-sm-8 col-md-5">
        <div class="media">
            <a class="thumbnail pull-left mr-3" href="./article.html?articleId=${teddy._id}"> <img class="media-object" src="${teddy.imageUrl}" style="width: 72px; height: 72px;"> </a>
            <div class="media-body overflow-hidden">
                <h4 class="media-heading"><a href="./article.html?articleId=${teddy._id}">${teddy.name}</a></h4>
                
            </div>
        </div></td>
        
        <td class="col-sm-1 col-md-1" style="text-align: center">
        ${teddy.color}
        </td>
        <td class="col-sm-1 col-md-1" style="text-align: center">
        <button id="add-one-to-cart-${teddy._id}-${colorWithoutSpace}" type="button" class="btn btn-danger add-button"><span>+</span></button>
        ${teddy.quantity}
        <button type="button" class="btn btn-primary add-button" id="remove-one-from-cart-${teddy._id}-${colorWithoutSpace}"><span>-</span></button>
        </td>
        <td class="col-sm-1 col-md-1 text-center"><strong>${teddy.price} €</strong></td>
        <td class="col-sm-1 col-md-1 text-center"><strong>${teddy.price * teddy.quantity} €</strong></td>
        <td class="col-sm-1 col-md-1">
        <button type="button" id="remove-btn-${teddy._id}-${colorWithoutSpace}" class="btn btn-danger">
             Remove
        </button></td>
    `;
    tableBody.appendChild(tr)
    
    // remove line
    document.querySelector(`#remove-btn-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = removeLineFromCart(`${teddy._id}-${colorWithoutSpace}`);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        calculateTotal(newCart);
    });

    // add one of selected to cart
    document.querySelector(`#add-one-to-cart-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = addOneToCart(`${teddy._id}-${colorWithoutSpace}`);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        calculateTotal(newCart);
    });
    
    // remove one of selected from cart
    document.querySelector(`#remove-one-from-cart-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = removeOneFromCart(`${teddy._id}-${colorWithoutSpace}`);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        calculateTotal(newCart);
    });

};
// finaliser l'achat
document.querySelector("#finaliser-achat").addEventListener("click", () => {
    checkOut();
});
}
}

