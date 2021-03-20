import { displayPrice } from './functions.js';

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
  <div class="eltprice"><p>${displayPrice(furnitures.price) + " €"}</p></div>
  <div class="ajouterpanier"><a class="add-cart"><i class="fas fa-shopping-cart fa-1x"></i></a></div></div></article>`
  container.innerHTML += article;

  let btn = document.querySelector('.ajouterpanier');
  btn.addEventListener('click', () => {
  alert('Vous avez ajouté ' + furnitures.name + ' à votre panier.')
  ajoutLocalStorage(furnitures);
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
  let item = {};
  item.id = furnitures._id;
  item.varnish = document.getElementById('type').value;
  item.quantity = 1 ;
  item.price = furnitures.price;
  let panier = [];
  if(localStorage.getItem('panier')){
    panier = JSON.parse(localStorage.getItem('panier'));
  }
  panier = addToCart(panier, item);

  localStorage.setItem('panier', JSON.stringify(panier));
 
};

function addToCart(panier, item){
  let newPanier = [...panier]
  let article = newPanier.find(elt => elt.id === item.id && elt.varnish === item.varnish);
  if(article !== undefined){
    article.quantity +=1
  }else{
    newPanier.push(item);
  }
  return newPanier;
};

