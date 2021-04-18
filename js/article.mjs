import { getTeddyById } from "./services/TeddiesService.js";
import { updateCartCounter } from "./services/CartService.js";

const articleId = new URLSearchParams(window.location.search).get("articleId");
getTeddyById(articleId);
updateCartCounter();


