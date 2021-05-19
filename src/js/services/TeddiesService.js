import * as DOMManipulation from './DOMManipulation';
import * as UtilitiesService from './Utilities'

if (window.location.origin == "https://auxent-adrien-orinoco.netlify.app") {
  var baseUrl = "https://oniroco-back.herokuapp.com/api";
} else {
  var baseUrl = "http://localhost:3000/api";
}

export async function getTeddiesList() {
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
    return teddies;
}

export async function getTeddyById(id) {
  return await fetch(`${baseUrl}/teddies/${id}`)
    .then((response) => {
      return response.json();
    });
}