// obtention du produit dans l'url

const queryString = window.location.search;
const urlParams = new URLSearchParams (queryString);


fetch("http://localhost:3000/api/furniture/" + urlParams.get("id"))
    .then(response => response.json())
    .then(furnitures => {
        if(furnitures._id === undefined){
          throw new Error("L'article n'existe pas ")
        };
        afficherContenair(furnitures);
        afficherSelection(furnitures);
    }).catch(error => {
      console.log(error);
      
      let container = document.getElementById('furnitureContainer');
      container.innerHTML = `<h1>Une erreur est survenue: ${error.message}</h1>`
      
  
 });

//function pour afficher produit selectionner

function afficherContenair(furnitures){
  let container = document.getElementById('furnitureContainer');
  let article = `<article class="furnitureContainer"><div class="difElt"><div class="eltname"><h2>${furnitures.name}</h2></div>
  <div class="eltimg"><img class="imgShop" src="${furnitures.imageUrl}" alt="${furnitures.name}" ></div>
  <div class="eltdesc"><p>${furnitures.description}</p></div>
  <div class="choixvernis"></div>
  <div class="eltprice"><p>${furnitures.price + " €"}</p></div>
  <div class="ajouterpanier"><a class="add-cart"><i class="fas fa-shopping-cart fa-1x"></i></a></div></div></article>`
  container.innerHTML += article;

  let btn = document.querySelector('.ajouterpanier');
  btn.addEventListener('click', () => {
  alert('Vous avez ajouté ' + furnitures.name + ' à votre panier.')
  ajoutLocalStorage(furnitures);
  //prixTotal();
})
};

//function pour afficher different vernis

function afficherSelection(furnitures){
  var label = document.createElement('label');
  label.textContent = "Vernis : ";
  var type = document.createElement('select');
  type.id = 'type';
  
  for(var i = 0; i < furnitures.varnish.length; i++) {
  
    var option = document.createElement('option');
    option.textContent = furnitures.varnish[i];
    option.value =furnitures.varnish[i];
    type.appendChild(option);
  }
  label.appendChild(type);
  document.querySelector('.choixvernis').appendChild(label);
};

// function pour ajouter au localstorage

function ajoutLocalStorage(furnitures){
  
  let panier = [];
  if(localStorage.getItem('panier')){
    panier = JSON.parse(localStorage.getItem('panier'));
  }
  panier.push({'panier' : furnitures});
  localStorage.setItem('panier', JSON.stringify(panier));
 
};

// function total si plusieur produit selectionné

/*function prixTotal() {

  let prix = parseInt(furnitures.price);
  let prixPanier = json.parse(localStorage.getItem('prixTotal'));

  if(prixDuPanier != null){
    localStorage.setItem("prixTotal", prixDuPanier + price);
  } else {
    localStorage.setItem("prixTotal", price);
  }
}
*/

