import '../scss/style.scss'
import { getProductList, getCart, clearCart } from "./services/CartService.js"
import { updateCartCounter } from "./services/CartService.js";

if (window.location.origin == "http://urlnetlify") {
  var baseUrl = "https://oniroco-back.herokuapp.com/api";
} else {
  var baseUrl = "http://localhost:3000/api";
}

let products = getProductList(getCart());
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
updateCartCounter()

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
    buildReceipt(response);
    clearCart();
    updateCartCounter();
}

export function buildReceipt(response) {
    let receiptContainer = document.querySelector("#receipt-container");
    receiptContainer.innerHTML = `
    <div id="receipt-header" class="card-header">
    <div> <b> Nom :</b>  <span id="receipt-first-name">${response.contact.firstName}</span></div>
    <div> <b> Prénom :</b>  <span id="receipt-last-name">${response.contact.lastName}</span></div>
    <div> <b> email :</b>  <span id="receipt-email">${response.contact.email}</span></div>
    <div> <b> Adresse :</b>  <span id="receipt-address">${response.contact.address}</span></div>
    <div> <b> Ville :</b>  <span id="receipt-city">${response.contact.city}</span> </div>
    <div> <b> Numéro de commande :</b> <span id="receipt-order-id">${response.orderId}</span> </div>
    </div>
    <ul id="receipt-list-group" class="list-group list-group-flush">
    </ul>
    <div id="receipt-footer">
    <div class="p-3">
    <b> Total  : <span id="receipt-total">Total</span> </b>
    </div>
    </div>`
    let itemList = buildItemList(response.products);
    document.querySelector("#receipt-list-group").innerHTML = itemList;
    let receiptTotal = getReceiptTotal(response.products);
    document.querySelector("#receipt-total").innerHTML = `${receiptTotal} €`;
}

export function buildItemList(products) {
    let itemList = ""
    products.forEach(product => {
        let price = (product.price/100).toFixed(2);
        itemList = itemList + `<li class="list-group-item"><b>Article : </b>${product.name} <span class="float-right">
        Prix : ${price} €</span></li>`;
    });
    return itemList;
}
export function getReceiptTotal(products) {
    let total = 0;
    products.forEach(product => {
        total += product.price
    });
    return (total/100).toFixed(2);
}