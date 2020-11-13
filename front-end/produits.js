// obtention du produit dans l'url

const { request } = require("express");

let article = () => {
    let request = newXMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 400 && this.status == 200) {
            furniture = JSON.parse(this.responseText);
            affichageProduit();
        }
    }
}
request.prependOnceListener("GET" "http://localhost:3000/api/furniture/" + _id);
request.setEncoding();

window.addEventListener('load', article);

// affichage du produit

function affichageProduit() {

    var article = document.createElement('article');
        var image = document.createElement('img');
        image.src = furniture.imageUrl:
        id = furniture_id;
    var div = document.createElement('div');
        var nom = document.createElement('h2');
        nom.textContent = furniture.name;
        nom.id = "furniture";

        var prix = document.createElement('h3');
        prix.textContent = 'Prix' ;
        var price = document.createElement ('p');
        price.textContent = furniture.price + '€';

        var description = document.createElement('h3');
        description.textContent = 'Description :';
        var description2 = document.createElement('p');
        description2.textContent = furniture.description;
}

// choix du vernis


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

// ajout dans le dom

produit.appendChild(article);
article.appendChild(nom);
article.appendChild(image);
article.appendChild(div);
div.appendChild(desc);
div.appendChild(description);
div.appendChild(label);
div.appendChild(vernis);