// recuperation 

fetch("http://localhost:3000/api/furniture/" + urlParams.get("id"))
    .then(response => response.json())
    .then(furnitures => {
        if(furnitures._id === undefined){
          throw new Error("L'article n'existe pas ")
        };
       chargementParnier(furnitures);
       afficherContenair(furnitures);
    }).catch(error => {
      let container = document.querySelector('.furnitures-panier');
      container.innerHTML = `<h1>Une erreur est survenue: ${error.message}</h1>`
 });

// chargement du panier
function chargementParnier (furnitures) {

    let data = JSON.parse(localStorage.getItem('panier'));
    var contenair = document.querySelector('.furnitures-panier');

    
    localStorage.setItem('panier', JSON.stringify(panier));
    
};


function afficherContenair (furnitures){
    let container = document.querySelector('.furnitures-panier');
    let article = `<article class="furnitureContainer"><div class="difElt"><div class="eltname"><h2>${furnitures.name}</h2></div>
    <div class="eltprice"><p>${furnitures.price + " €"}</p></div>
    <div class="choixvernis">${furnitures.varnish}</div>`
    container.innerHTML += article;
}