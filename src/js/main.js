
import '../scss/style.scss'
import {getTeddiesListIntoContainer} from "./services/TeddiesService.js"
import {updateCartCounter} from "./services/CartService.js"


getTeddiesListIntoContainer("#bears-list");

updateCartCounter();