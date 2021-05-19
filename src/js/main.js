import '../scss/style.scss'
import * as TeddiesService from "./services/TeddiesService.js"
import * as CartService from "./services/CartService.js"
import * as DOMManipulation from "./services/DOMManipulation.js"

CartService.updateCartCounter();
getTeddiesListIntoContainer();

async function getTeddiesListIntoContainer() {
    let teddies = await TeddiesService.getTeddiesList();
    DOMManipulation.createCardList("#bears-list", teddies);
}