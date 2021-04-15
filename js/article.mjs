import {getTeddyById} from "./services/TeddiesService.js"

const articleId = new URLSearchParams(window.location.search).get('articleId');
getTeddyById(articleId);


