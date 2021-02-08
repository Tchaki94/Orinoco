// obtention du produit dans l'url

const queryString = window.location.search;
const urlParams = new URLSearchParams (queryString);

//console.log(id);

fetch("http://localhost:3000/api/furniture/" + urlParams.get("id"))
    .then(response => response.json())
    .then(furnitures => {
       if(furnitures._id === undefined){ throw new Error("L'article n'existe pas ")};
        console.log(furnitures)
        displayContainer(furnitures);
        displaySelect(furnitures);
    }).catch(error => {
      console.log(error);
      let container = document.getElementById('furnitureContainer');
      container.innerHTML = `<h1>Une erreur est survenue: ${error.message}</h1>`
    })

function displayContainer(furnitures){
  let container = document.getElementById('furnitureContainer');
  let article = `<article class="furnitureContainer"><div class="difElt"><div class="eltname"><h2>${furnitures.name}</h2></div>
  <div class="eltimg"><img class="imgShop" src="${furnitures.imageUrl}" alt="${furnitures.name}" ></div>
  <div class="eltdesc"><p>${furnitures.description}</p></div>
  <div class="choixvernis"></div>
  <div class="eltprice"><p>${furnitures.price + " €"}</p></div>
  <div class="addtocart"><a class="add-cart" onclick="addItemToCart"><i class="fas fa-shopping-cart fa-1x"></i></a></div></div></article>`
  container.innerHTML += article;
}

function displaySelect(furnitures){
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
}
// rajouter le choix du vernis 

