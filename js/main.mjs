
import {createCardList} from "./services/TeddiesService.js"
import {updateCartCounter} from "./services/CartService.js"


getTeddiesListIntoContainer("#bears-list");

async function getTeddiesListIntoContainer(querySelector) {
    let teddies = await fetch("http://localhost:3000/api/teddies/").then((response) => {
        return response.json()
    });
    createCardList(querySelector, teddies);
}


updateCartCounter()
       