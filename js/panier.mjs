import { clearCart, removeLineFromCart, updateCartCounter } from "./services/CartService.js"
let tableBody = document.querySelector("#cart-list-body");
let cart = JSON.parse(window.localStorage.getItem('cart'));

buildCartList(cart);
calculateTotal(cart);
updateCartCounter()


document.querySelector("#clear-cart").addEventListener("click", () => {
 clearCart();
 tableBody.innerHTML = "";
 console.log("cart", JSON.parse(window.localStorage.getItem('cart')));
})

function buildCartList(cart) {
    if (cart) {
    for (const [key, teddy] of Object.entries(cart)) {
        let tr = document.createElement("tr");
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
        ${teddy.quantity}
        </td>
        <td class="col-sm-1 col-md-1 text-center"><strong>${teddy.price} €</strong></td>
        <td class="col-sm-1 col-md-1 text-center"><strong>${teddy.price * teddy.quantity} €</strong></td>
        <td class="col-sm-1 col-md-1">
        <button type="button" id="remove-btn-${teddy._id}" class="btn btn-danger">
             Remove
        </button></td>
    `;
    tableBody.appendChild(tr)
    
    document.querySelector(`#remove-btn-${teddy._id}`).addEventListener("click", () => {
        let newCart = removeLineFromCart(teddy._id);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        calculateTotal(newCart);
    })
    };
}
}

function calculateTotal(cart) {
    if (cart) {
        let total = 0;
        let totalField = document.querySelector("#total");
        for (const [key, teddy] of Object.entries(cart)) {
            total += teddy.price * teddy.quantity
        }
        totalField.innerHTML = `${total} €`
    }
}