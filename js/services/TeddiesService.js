
export default function addAllTeddiesTo(querySelector) {


    fetch("http://localhost:3000/api/teddies/").then((response) => {
    return response.json()
}).then((teddies) => {
    let teddiesContainer = document.querySelector(querySelector);
    teddies.forEach(teddy => {
        let bearCard = createBearCard(teddy);
        teddiesContainer.appendChild(bearCard);
    });
})


}

  
function createBearCard(teddy) {
    let id = teddy._id;
    let colors = teddy.colors;
    let description = teddy.description;
    let name = teddy.name;
    let price = teddy.price;
    let imgUrl = teddy.imageUrl;

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "25%";

    let image = document.createElement("img");
    image.classList.add("card-img-top")
    image.src = imgUrl;
    image.alt = `Image de l'ourson nommé ${name}`

    card.append(image)

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let link = document.createElement("a");
    link.href = id;
    let title = document.createElement("h5")
    title.append(name)
    link.append(title)
    cardBody.append(link)

    let p = document.createElement("p");
    p.append(description);
    cardBody.append(p)

    let prix = document.createElement("span")
    prix.append(`${price} €`)
    cardBody.append(prix);

    card.append(cardBody);


    return card
   let cardTemplate = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>`

}