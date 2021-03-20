import { displayPrice } from './functions.js';

// obtention du produit dans l'url

fetch("http://localhost:3000/api/furniture")
    .then(response => response.json())
    .then(furnitures => {
        
    chargementCommande(furnitures);
    }).catch(error => {
        console.log(error);
        let container = document.querySelector('#recap');
        container.innerHTML = `<h1> Une erreur est survenue: ${error.message}</h1>`
    });


// chargement de la commande
function chargementCommande (furnitures) {

    let contacts = JSON.parse(localStorage.getItem('commande'));
    let articles = JSON.parse(localStorage.getItem('panier'))
    let container = document.querySelector('#recap');

    container.innerHTML += `<article class="article-commande">
    <div class="difEltCommande">
    <h2> Merci pour votre commande ${contacts.contact.firstName} ${contacts.contact.lastName},</br> votre commande N°${contacts.orderId} de ${displayPrice(prixTotal(furnitures))} €</br> sera livrée au ${contacts.contact.address} à ${contacts.contact.city}.</h2>
    <h2>Un email de conformation sera envoyé à ${contacts.contact.email}.</h2>
    </div></article>`
}

let btnRefresh = document.querySelector('#refresh');
btnRefresh.addEventListener('click', () => {
    localStorage.clear();
    window.location = "index.html";
})

function prixTotal (furnitures){

    let articles = JSON.parse(localStorage.getItem('panier'));
    let prixTotal = 0
    articles.forEach(article => {
        let product = furnitures.find(elt => elt._id === article.id);
        console.log(product);
        prixTotal +=  article.quantity * product.price;
    });
    return prixTotal;
}
