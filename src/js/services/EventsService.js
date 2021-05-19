import * as DOMManipulation from "./DOMManipulation";
import * as CartService from "./CartService";

let tableBody = document.querySelector("#cart-list-body");

export function addRemoveOneFromCartEvent(teddy, colorWithoutSpace, cart) {
  document
    .querySelector(`#remove-one-from-cart-${teddy._id}-${colorWithoutSpace}`)
    .addEventListener("click", () => {
      let newCart = CartService.removeOneFromCart(
        `${teddy._id}-${colorWithoutSpace}`,
        cart
      );
      tableBody.innerHTML = "";
      DOMManipulation.buildCartList(newCart);
      CartService.displayTotal(CartService.calculateTotalCartPrice(newCart));
      CartService.updateCartCounter();
      DOMManipulation.wiggleCart();
    });
}

export function addOneToCartEvent(
  teddy,
  colorWithoutSpace,
  cart,
  tableBody
) {
  document
    .querySelector(`#add-one-to-cart-${teddy._id}-${colorWithoutSpace}`)
    .addEventListener("click", () => {
      let newCart = CartService.addOneToCart(
        `${teddy._id}-${colorWithoutSpace}`,
        cart
      );
      tableBody.innerHTML = "";
      DOMManipulation.buildCartList(newCart);
      CartService.displayTotal(CartService.calculateTotalCartPrice(newCart));
      CartService.updateCartCounter();
      DOMManipulation.wiggleCart();
    });
}

export function addRemoveLineEvent(teddy, colorWithoutSpace, tableBody) {
  document
    .querySelector(`#remove-btn-${teddy._id}-${colorWithoutSpace}`)
    .addEventListener("click", () => {
      let newCart = CartService.removeLineFromCart(
        `${teddy._id}-${colorWithoutSpace}`
      );
      tableBody.innerHTML = "";
      DOMManipulation.buildCartList(newCart);
      CartService.displayTotal(CartService.calculateTotalCartPrice(newCart));
      CartService.updateCartCounter();
      DOMManipulation.wiggleCart();
    });
}

export function addColorSelectEvent(teddy, inputGroupSelectColor) {
    document.querySelector(`#teddy-article`).addEventListener("click", () => {
      teddy.color = inputGroupSelectColor.value;
      CartService.addToCart(teddy);
      DOMManipulation.wiggleCart();
    });
  }