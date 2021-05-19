import '../scss/style.scss'
import * as TeddiesService from "./services/TeddiesService.js";
import * as CartService from "./services/CartService.js";
import * as UtilitiesService from "./services/Utilities.js";
import * as DOMManipulation from "./services/DOMManipulation";

const articleId = new URLSearchParams(window.location.search).get("articleId");

CartService.updateCartCounter();
buildTeddyView(articleId);

async function buildTeddyView(id) {
    let teddy = await TeddiesService.getTeddyById(id);
    teddy = UtilitiesService.placeDecimal(teddy);
    DOMManipulation.createTeddyView(teddy);    
}
