import '../scss/style.scss'
import {getTeddiesListIntoContainer, createCardList} from "./services/TeddiesService.js"
import {updateCartCounter} from "./services/CartService.js"
import {teddiesResponse } from "../../tests/data/teddiesResponse"


updateCartCounter();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const environment = urlParams.get('environment')
if (environment === "test") {
    createCardList("#bears-list", teddiesResponse);} else {
        getTeddiesListIntoContainer("#bears-list");
    }