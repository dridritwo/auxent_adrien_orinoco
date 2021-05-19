import '../scss/style.scss'
import * as CartService from "./services/CartService.js";
import * as DOMManipulation from "./services/DOMManipulation.js";

if (window.location.origin == "https://auxent-adrien-orinoco.netlify.app") {
  var baseUrl = "https://oniroco-back.herokuapp.com/api";
} else {
  var baseUrl = "http://localhost:3000/api";
}

let products = CartService.getProductList(CartService.getCart());
const contact = {
    firstName: new URLSearchParams(window.location.search).get("firstName"),
    lastName: new URLSearchParams(window.location.search).get("lastName"),
    email: new URLSearchParams(window.location.search).get("email"),
    address: new URLSearchParams(window.location.search).get("address"),
    city: new URLSearchParams(window.location.search).get("city")
}

if (products.length > 0) {
    postContact(contact, products);
} else {
    let receiptContainer = document.querySelector("#receipt-container");
    receiptContainer.innerHTML = `<div class="text-danger"> Erreur, panier vide. </div>`
}
CartService.updateCartCounter()

async function postContact(contact, products){
    let body = {
        contact: contact,
        products: products
    }
    let response = await fetch(`${baseUrl}/teddies/order`, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    }).then((response) => {
        return response.json()
    }, (error) => {
        console.log(error)
    });
    DOMManipulation.buildReceipt(response);
    CartService.clearCart();
    CartService.updateCartCounter();
}

