import { get } from 'mongoose';
import '../scss/style.scss'
import { clearCart, removeLineFromCart, updateCartCounter, stringWithoutSpace, displayTotal, addOneToCart, removeOneFromCart, checkOut, getCart, calculateTotalCartPrice, getCartSize } from "./services/CartService.js";
import * as DOMManipulation from "./services/DOMManipulation";
let tableBody = document.querySelector("#cart-list-body");
let cart = getCart();

buildCartList(cart);
displayTotal(calculateTotalCartPrice(cart));
updateCartCounter()


document.querySelector("#clear-cart").addEventListener("click", () => {
 clearCart();
 tableBody.innerHTML = "";
 DOMManipulation.wiggleCart();
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
        <button id="add-one-to-cart-${teddy._id}-${colorWithoutSpace}"  class="btn btn-primary add-button p-4"><span>+</span></button>
        ${teddy.quantity}
        <button  class="btn btn-danger add-button p-4" id="remove-one-from-cart-${teddy._id}-${colorWithoutSpace}"><span>-</span></button>
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
        DOMManipulation.wiggleCart();
    });

    // add one of selected to cart
    document.querySelector(`#add-one-to-cart-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = addOneToCart(`${teddy._id}-${colorWithoutSpace}`, cart);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        displayTotal(calculateTotalCartPrice(newCart));
        updateCartCounter();
        DOMManipulation.wiggleCart();
    });
    
    // remove one of selected from cart
    document.querySelector(`#remove-one-from-cart-${teddy._id}-${colorWithoutSpace}`).addEventListener("click", () => {
        let newCart = removeOneFromCart(`${teddy._id}-${colorWithoutSpace}`, cart);
        tableBody.innerHTML = "";
        buildCartList(newCart);
        displayTotal(calculateTotalCartPrice(newCart));
        updateCartCounter();
        DOMManipulation.wiggleCart();
    });

};
}
}

// finaliser l'achat
document.querySelector("#finaliser-achat").addEventListener("click", () => {
    if (getCartSize(getCart()) > 0) {
        document.querySelector('#cart-form').classList.remove("hidden")
        document.querySelector('#btn-summary').classList.add("hidden")
        document.querySelector("#firstName").scrollIntoView({
            behavior: 'smooth'
          });
    }
});
document.querySelector("#return").addEventListener("click", () => {
    document.querySelector('#cart-form').classList.add("hidden")
    document.querySelector('#btn-summary').classList.remove("hidden")
});

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
} else {
    event.preventDefault(); 
    
    if (getCartSize(getCart())) {

        let contact = {
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            email: document.querySelector("#email").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value
        }
        
        checkOut(contact);
    } else {
        form.classList.add('was-validated');
        document.querySelector("#panier-vide").classList.remove("hidden")
    }
}
}, false);
});

