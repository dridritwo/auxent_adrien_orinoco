import * as DOMManipulation from './DOMManipulation';
import * as UtilitiesService from './Utilities'

if (window.location.origin == "https://auxent-adrien-orinoco.netlify.app") {
  var baseUrl = "https://oniroco-back.herokuapp.com/api";
} else {
  var baseUrl = "http://localhost:3000/api";
}

export async function getTeddiesListIntoContainer(querySelector) {
  let teddies = await fetch(`${baseUrl}/teddies`)
    .then(
      (response) => {
        return response.json();
      },
      (error) => {
        console.log(error);
      }
    )
    .then((json) => {
      json.forEach((teddy) => {
        teddy = UtilitiesService.placeDecimal(teddy);
      });
      return json;
    });
  DOMManipulation.createCardList(querySelector, teddies);
}

export function getTeddyById(id) {
  fetch(`${baseUrl}/teddies/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((teddy) => {
      teddy = UtilitiesService.placeDecimal(teddy);
      DOMManipulation.createTeddyView(teddy);
    });
}