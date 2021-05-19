import "../scss/style.scss";
import * as CartService from "./services/CartService.js";
import * as DOMManipulation from "./services/DOMManipulation";

let tableBody = document.querySelector("#cart-list-body");
let cart = CartService.getCart();

DOMManipulation.buildCartList(cart);
CartService.displayTotal(CartService.calculateTotalCartPrice(cart));
CartService.updateCartCounter();

document.querySelector("#clear-cart").addEventListener("click", () => {
  CartService.clearCart();
  tableBody.innerHTML = "";
  DOMManipulation.wiggleCart();
});

// finaliser l'achat
document.querySelector("#finaliser-achat").addEventListener("click", () => {
  if (CartService.getCartSize(CartService.getCart()) > 0) {
    document.querySelector("#cart-form").classList.remove("hidden");
    document.querySelector("#btn-summary").classList.add("hidden");
    document.querySelector("#firstName").scrollIntoView({
      behavior: "smooth",
    });
  }
});
document.querySelector("#return").addEventListener("click", () => {
  document.querySelector("#cart-form").classList.add("hidden");
  document.querySelector("#btn-summary").classList.remove("hidden");
});

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName("needs-validation");
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
      } else {
        event.preventDefault();

        if (CartService.getCartSize(CartService.getCart())) {
          let contact = {
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            email: document.querySelector("#email").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value,
          };

          CartService.checkOut(contact);
        } else {
          form.classList.add("was-validated");
          document.querySelector("#panier-vide").classList.remove("hidden");
        }
      }
    },
    false
  );
});
