import {addToCart} from "./CartService.js";

export async function getTeddiesListIntoContainer(querySelector) {
    let teddies = await fetch("http://localhost:3000/api/teddies/").then((response) => {
        return response.json()
    });
    createCardList(querySelector, teddies);
}

export function createCardList(querySelector, teddies) {
    let teddiesContainer = document.querySelector(querySelector);
    teddies.forEach(teddy => {
        let bearCard = createBearCard(teddy);
        teddiesContainer.appendChild(bearCard);
    });
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
    card.style.width = "250px";

    let image = document.createElement("img");
    image.classList.add("card-img-top");
    image.classList.add("h180");
    image.src = imgUrl;
    image.alt = `Image de l'ourson nommé ${name}`

    card.append(image)

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let link = document.createElement("a");
    link.href = `./article.html?articleId=${id}`;
    link.classList.add("stretched-link")
    let title = document.createElement("h5")
    title.append(name)
    link.append(title)
    cardBody.append(link)

    let p = document.createElement("p");
    p.append(description);
    cardBody.append(p)

    let colorsDiv = document.createElement("div");
    colorsDiv.classList.add("d-flex");
    colorsDiv.classList.add("gap");
    colorsDiv.textContent = "Couleurs : ";
    colors.forEach(color => {
        let colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.style.backgroundColor = color;
        colorsDiv.appendChild(colorDiv);
    });
    cardBody.append(colorsDiv);

    let prix = document.createElement("span")
    prix.append(`${price} €`)
    prix.style.fontWeight = "900";
    cardBody.append(prix);

    card.append(cardBody);

    let cardTemplate = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    return card

}

export function getTeddyById(id) {
    fetch(`http://localhost:3000/api/teddies/${id}`).then((response) => {
    return response.json()
}).then((teddy) => {
    createTeddyView(teddy);
})
}

function createTeddyView(teddy) {
    let main = document.querySelector("main");
    main.innerHTML = `<div class="card flex-md-row mt-4 mb-4 box-shadow h-md-250 w-75 mw-100 mx-auto">
    <img loading="lazy" class="card-img-left flex-auto d-md-block w-100 w-md-50"  alt="article image"  src="${teddy.imageUrl}" >
    <div class="card-body d-flex flex-column align-items-start">
      <h3 class="mb-0">
        ${teddy.name}
      </h3>
      <div class="mb-1 text-muted">${teddy.price} €</div>
      <div class="input-group my-3 p-0 col-sm-3 col-md-3">
            <select class="form-select" aria-label="Default select example" id="inputGroupSelectColor-${teddy._id}">
                
            </select>
        </div>
      <p class="card-text mb-auto">${teddy.description}</p>
      <button id="teddy-article" class="btn btn-rounded bg-primary text-white my-3 mx-auto">Ajouter au panier</button>
      
    </div>
  </div>`;
  let inputGroupSelectColor = document.querySelector(`#inputGroupSelectColor-${teddy._id}`);
    teddy.colors.forEach(color => {
        let option = document.createElement("option");
        option.text = color;
        option.value = color;
        inputGroupSelectColor.append(option);
    });
    document.querySelector(`#teddy-article`).addEventListener('click', () => {
        
        teddy.color = inputGroupSelectColor.value;
        addToCart(teddy);
        
    })
}



