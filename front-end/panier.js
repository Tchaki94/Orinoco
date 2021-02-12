const queryString = window.location.search;
const urlParams = new URLSearchParams (queryString);


fetch("http://localhost:3000/api/furniture/" + urlParams.get("id"))
    .then(response => response.json())
    .then(furnitures => {
        if(furnitures._id === undefined){ throw new Error("L'article n'existe pas ")};
        console.log(furnitures);
        afficherContenair(furnitures);
    }).catch(error => {
        console.log(error);
  
        let container = document.querySelector('.furnitures-panier');
        container.innerHTML = `<h1>Une erreur est survenue: ${error.message}</h1>`
  

});

function afficherContenair(furnitures){
    let container = document.getElementById('.furnitures-pnanier');
    let article = `<article class="furnitureContainer"><div class="difElt"><div class="eltname"><h2>${furnitures.name}</h2></div>
    <div class="eltprice"><p>${furnitures.price + " €"}</p></div>
    <div class="choixvernis">${furnitures.varnish}</div>`
    container.innerHTML += article;

    affichagePanier();
  
  
  };

// On récupere l'article mis dans le panier + prix

function affichagePanier(){

    let data = JSON.parse(localStorage.getItem('panier'));

    /*var total = localStorage.getItem('prixTotal');
    var prixPanier = document.querySelector('.total');

    if (total != null) {
        prixPanier.textContent = 'Le prix totale de votre panier est de : ' + total +  ' €';
        prixPanier.id = 'prixTotal'; 
      } else  {
        prixPanier.textContent = 'Le montant de votre commande est de : 0 €';
      }*/
}
