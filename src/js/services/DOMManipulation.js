import * as CartService from "./CartService";
import * as EventsService from "./EventsService";

export function createCardList(querySelector, teddies) {
  let teddiesContainer = document.querySelector(querySelector);
  teddies.forEach((teddy, index) => {
    teddiesContainer.appendChild(createBearCard(teddy, index));
  });
}

function createBearCard(teddy, index) {
  let id = teddy._id;
  let colors = teddy.colors;
  let description = teddy.description;
  let name = teddy.name;
  let price = teddy.price;
  let imgUrl = teddy.imageUrl;

  let card = document.createElement("div");
  card.classList.add("card");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("card-img-container");
  let image = document.createElement("img");
  image.classList.add("card-img-top");
  image.src = imgUrl;
  image.alt = `Image de l'ourson nommé ${name}`;

  imageContainer.append(image);
  card.append(imageContainer);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let link = document.createElement("a");
  link.href = `./article.html?articleId=${id}`;
  link.classList.add("stretched-link");
  let title = document.createElement("h2");
  title.append(name);
  link.append(title);
  cardBody.append(link);

  link.onfocus = function () {
    card.classList.add("focused");
  };
  link.onfocusout = function () {
    card.classList.remove("focused");
  };

  let p = document.createElement("p");
  p.append(description);
  cardBody.append(p);

  let colorsDiv = document.createElement("div");
  colorsDiv.classList.add("d-flex");
  colorsDiv.classList.add("gap");
  colors.forEach((color) => {
    let colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = color;
    colorsDiv.appendChild(colorDiv);
  });
  let colorsDivContainer = document.createElement("div");
  colorsDivContainer.textContent = "Couleurs : ";
  colorsDivContainer.append(colorsDiv);
  cardBody.append(colorsDivContainer);

  let prix = document.createElement("span");
  prix.append(`${price} €`);
  prix.style.fontWeight = "900";
  cardBody.append(prix);

  card.classList.add("dont-show-card-main");
  setTimeout(function () {
    card.classList.remove("dont-show-card-main");
  }, index * 200 + 100);
  card.append(cardBody);
  return card;
}

export function createTeddyView(teddy) {
  let main = document.querySelector("main");
  main.innerHTML = `
      <div class="card flex-md-row mt-4 mb-4 box-shadow h-md-250 w-75 mw-100 mx-auto article">
          <div class="article--thumbnail pull-left w-100">
              <img loading="lazy" class="media-object article--img"  alt="article image ${teddy.name}"  src="${teddy.imageUrl}" >
          </div>
          <div class="card-body d-flex flex-column align-items-start">
          <h1 class="mb-0 text-secondary">
              ${teddy.name}
          </h1>
          <div class="mb-1 text-muted">${teddy.price} €</div>
          <div class="input-group my-3 ">
                  <select class="form-select" aria-label="Default select example" id="inputGroupSelectColor-${teddy._id}">
                      
                  </select>
              </div>
          <p class="card-text mb-auto">${teddy.description}</p>
          <button id="teddy-article" class="btn btn-rounded bg-primary text-white my-3 mx-auto">Ajouter au panier</button>
          
          </div>
      </div>`;

  let inputGroupSelectColor = document.querySelector(
    `#inputGroupSelectColor-${teddy._id}`
  );
  addColorsToArticleCard(teddy, inputGroupSelectColor);

  EventsService.addColorSelectEvent(teddy, inputGroupSelectColor);
}

function addColorsToArticleCard(teddy, inputGroupSelectColor) {
  teddy.colors.forEach((color) => {
    let option = document.createElement("option");
    option.text = color;
    option.value = color;
    inputGroupSelectColor.append(option);
  });
}

export function wiggleCart() {
  document.querySelector("#cart-svg").classList.add("wiggle-cart");
  document.querySelector("#cart-counter").classList.add("wiggle-cart");
  setTimeout(() => {
    document.querySelector("#cart-counter").classList.remove("wiggle-cart");
    document.querySelector("#cart-svg").classList.remove("wiggle-cart");
  }, 200);
}

export function buildCartList(cart) {
  let tableBody = document.querySelector("#cart-list-body");
  if (cart) {
    for (const [key, teddy] of Object.entries(cart)) {
      let tr = document.createElement("tr");
      let colorWithoutSpace = CartService.stringWithoutSpace(teddy.color);
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
      tableBody.appendChild(tr);

      // remove line
      EventsService.addRemoveLineEvent(teddy, colorWithoutSpace, tableBody);

      // add one of selected to cart
      EventsService.addOneToCartEvent(
        teddy,
        colorWithoutSpace,
        cart,
        tableBody
      );

      // remove one of selected from cart
      EventsService.addRemoveOneFromCartEvent(teddy, colorWithoutSpace, cart);
    }
  }
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