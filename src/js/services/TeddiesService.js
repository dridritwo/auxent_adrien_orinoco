import {addToCart} from "./CartService.js";

export async function getTeddiesListIntoContainer(querySelector) {

    let teddies = await fetch("http://localhost:3000/api/teddies/").then((response) => {
        return response.json()
    }, (error) => {
        console.log(error)
    }).then((json) => {
        json.forEach(teddy => {
            teddy = placeDecimal(teddy);
        });
        return json
    });
    createCardList(querySelector, teddies);

}

export function placeDecimal(teddy) {
    teddy.price = (teddy.price / 100).toFixed(2);
    return teddy
}

export function createCardList(querySelector, teddies) {
    let teddiesContainer = document.querySelector(querySelector);
    teddies.forEach((teddy, index) => {
        teddiesContainer.appendChild(createBearCard(teddy, index));
    });
}  

function createBearCard(teddy, index) {
    let id = teddy._id;
    let colors = teddy.colors;
    let description = teddy.description;
    let name = teddy.name;
    let price = teddy.price;
    let imgUrl = teddy.imageUrl;

    let card = document.createElement("div");
    card.classList.add("card");

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("card-img-container");
    let image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = imgUrl;
    image.alt = `Image de l'ourson nommé ${name}`;

    imageContainer.append(image);
    card.append(imageContainer);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let link = document.createElement("a");
    link.href = `./article.html?articleId=${id}`;
    link.classList.add("stretched-link")
    let title = document.createElement("h2")
    title.append(name)
    link.append(title)
    cardBody.append(link)

    let p = document.createElement("p");
    p.append(description);
    cardBody.append(p)

    let colorsDiv = document.createElement("div");
    colorsDiv.classList.add("d-flex");
    colorsDiv.classList.add("gap");
    colors.forEach(color => {
        let colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.style.backgroundColor = color;
        colorsDiv.appendChild(colorDiv);
    });
    let colorsDivContainer = document.createElement("div");
    colorsDivContainer.textContent = "Couleurs : ";
    colorsDivContainer.append(colorsDiv);
    cardBody.append(colorsDivContainer);

    let prix = document.createElement("span")
    prix.append(`${price} €`)
    prix.style.fontWeight = "900";
    cardBody.append(prix);

    card.classList.add("dont-show-card-main")
    setTimeout(function(){ 
        card.classList.remove("dont-show-card-main") 
    }, index*200 + 100);
    card.append(cardBody);
    return card
}

export function getTeddyById(id) {
    fetch(`http://localhost:3000/api/teddies/${id}`).then((response) => {
    return response.json()
}).then((teddy) => {
    teddy = placeDecimal(teddy)
    createTeddyView(teddy);
});
}

function createTeddyView(teddy) {
    let main = document.querySelector("main");
    main.innerHTML = `
    <div class="card flex-md-row mt-4 mb-4 box-shadow h-md-250 w-75 mw-100 mx-auto article">
        <div class="article--thumbnail pull-left w-100">
            <img loading="lazy" class="media-object article--img"  alt="article image ${teddy.name}"  src="${teddy.imageUrl}" >
        </div>
        <div class="card-body d-flex flex-column align-items-start">
        <h1 class="mb-0 text-secondary">
            ${teddy.name}
        </h1>
        <div class="mb-1 text-muted">${teddy.price} €</div>
        <div class="input-group my-3 ">
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
        wiggleCart();
    })
}

export function wiggleCart() {
    document.querySelector("#cart-svg").classList.add("wiggle-cart");
    document.querySelector("#cart-counter").classList.add("wiggle-cart");
    setTimeout(() => {  
        document.querySelector("#cart-counter").classList.remove("wiggle-cart"); 
        document.querySelector("#cart-svg").classList.remove("wiggle-cart"); 
    }, 200);
}

