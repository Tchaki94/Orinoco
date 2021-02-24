// recuperation du produit

fetch("http://localhost:3000/api/furniture")
    .then(response => response.json())
    .then(furnitures => {
        
    chargementParnier(furnitures);
    }).catch(error => {
      let container = document.querySelector('.furnitures-panier');
      container.innerHTML = `<h1>Une erreur est survenue: ${error.message}</h1>`
 });

// chargement du panier
function chargementParnier (furnitures) {

    let articles = JSON.parse(localStorage.getItem('panier'));
    let prixTotal = 0
    let contenair = document.querySelector('.furnitures-panier');
    articles.forEach(article => {
      let product = furnitures.find(elt => elt._id === article.id);
      prixTotal +=  article.quantity * product.price;
      contenair.innerHTML += `<article class="article-panier">
      <div class="difEltPanier">
      <div class="eltnamePanier"><h2>Ref : ${article.id}</h2></div>
      <div class="eltpricePanier"><p>${article.price + " €"}</p></div>
      <div class="choixvernisPanier"><p>${article.varnish}</p></div>
      <div class="eltqtéPanier"><p>${article.quantity}</p></div>
      </div></article>`
    })
    contenair.innerHTML += `<article class="totalpanier"><div><p>Total = ${prixTotal} €</p></div>`
};



// Event sur btn valider panier
/*
let prenom = document.getElementById('prenom').value;
let nom = document.getElementById('nom').value;
let email = document.getElementById('email').value;
let addresse = document.getElementById('addresse').value;
let ville = document.getElementById('ville').value;
*/

let btnValide = document.querySelector('button');

btnValide.addEventListener('click', () => {

  var prenom = document.getElementById('prenom');
  var aucunPrenom = document.getElementById('aucunPrenom');
  var prenomOk = /^[a-zA-Z ,.'-]+$/;

  var nom = document.getElementById('nom');
  var aucunNom = document.getElementById('aucunNom');
  var nomOk = /^[a-zA-Z ,.'-]+$/;

  var email = document.getElementById('email');
  var aucunEmail = document.getElementById('aucunEmail');
  var emailOk = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;

  var adresse = document.getElementById('adresse');
  var aucuneAdresse = document.getElementById('aucuneAdresse');
  var adresseOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

  var ville = document.getElementById('ville');
  var aucuneVille = document.getElementById('aucuneVille');
  var villeOk = /^^[a-zA-Z ,.'-]+$/;

  // condition pour formulaire

  if (prenomOk.test(prenom.value) == false){
    alert("Format de votre prénom incorrect");
    return event.preventDefault();
  } else if (nomOk.test(nom.value) == false){
    alert("Format de votre nom incorrect");
    return event.preventDefault();
  } else if (emailOk.test(email.value) == false){
    alert("Format de votre email incorrect");
    return event.preventDefault();
  } else if (adresseOk.test(adresse.value) == false){
    alert("Format de votre adresse incorrect");
    return event.preventDefault();
  } else if (villeOk.test(adresse.value) == false){
    alert("Format de votre ville incorrect");
    return event.preventDefault();
  } else if (panier == null || total == 0){
    return event.preventDefault();
  }
  alert('Merci pour votre commande !!')
  window.location.href = "commande.html";
})
