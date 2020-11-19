// obtention du produit dans l'url

fetch("http://localhost:3000/api/furniture")
    .then(response => response.json())
    .then(furnitures => {
        console.log(furnitures)
        let container = document.getElementById('furnitureContainer');
        furnitures.forEach(furniture => {
        let article = `<article class="furnitureContainer"><div class="difElt"><div class="eltname"><h2>${furniture.name}</h2></div><div class="eltimg"><img class="imgShop" src="${furniture.imageUrl}" alt="${furniture.name}" ></div><div class="eltdesc"><p>${furniture.description}</p></div><div class="eltprice"><p>${furniture.price + " €"}</p></div><div class="addtocart"><i class="fas fa-shopping-cart fa-3x"></i></div></div></article>`
            container.innerHTML += article;
        })
    });
/*  furnitures.forEach(furniture => {
            let article = `<article><h2>${furniture.name}</h2><img class="imgShop" src="${furniture.imageUrl}" alt="${furniture.name}" ></article>`
            container.innerHTML += article;
        }) */

// choix du vernis

/*
var label = document.createElement('label');
label.textContent = "Vernis :";
var vernis = document.createElement('select');
vernis.id = "choix";
var choix = furniture.varnish;
choix.id = "vernis";

// boucle pour le vernis 

for (var i = 0; i < choix.length; i++);
var option = document.createElement('option');
option.textContent = choix[i];
option.id = "vernis";
vernis.appendChild(option);

*/