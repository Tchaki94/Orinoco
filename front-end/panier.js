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



let btnValide = document.querySelector('button');

btnValide.addEventListener('click', (event) => {
  event.preventDefault();
  var prenom = document.getElementById('prenom');
  var prenomOk = /^[a-zA-Z ,.'-]+$/;

  var nom = document.getElementById('nom');
  var nomOk = /^[a-zA-Z ,.'-]+$/;

  var email = document.getElementById('email');
  var emailOk = /^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/;

  var adresse = document.getElementById('adresse');
  var adresseOk = /[0-9a-zA-Z]{1,3}[a-z ,.'-]+$/;

  var ville = document.getElementById('ville');
  var villeOk = /^^[a-zA-Z ,.'-]+$/;

  // condition pour formulaire
  isFormOk = true;
  if (!prenomOk.test(prenom.value)){
    alert("Format de votre prénom incorrect");
    isFormOk = false;
  }
  if (!nomOk.test(nom.value)){
    alert("Format de votre nom incorrect");
    isFormOk = false;
  }
  if (!emailOk.test(email.value)){
    alert("Format de votre email incorrect");
    isFormOk = false;
  }
  if (!adresseOk.test(adresse.value)){
    alert("Format de votre adresse incorrect");
    isFormOk = false;
  }
  if (!villeOk.test(ville.value)){
    alert("Format de votre ville incorrect");
    isFormOk = false;
  }
  alert('Merci pour votre commande !!')
  if(isFormOk){
    let articles = JSON.parse(localStorage.getItem('panier'));
    let data = {};
    data.contact = {
      firstName: prenom.value,
      lastName: nom.value,
      address: adresse.value,
      city: ville.value,
      email: email.value,

    }
    data.products = articles.map(product => product.id)
    console.log(data);
    fetch("http://localhost:3000/api/furniture/order", {
      method: "POST",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(data),
    }).then(response => { 
      return response.json()
    }).then( response => {
      //console.log(response);
      window.location = "commande.html";
    })
    ajoutCommande(data);
  }
  
})

function ajoutCommande (data) {
  dataCommande = JSON.stringify({data});
  localStorage.setItem('commande', JSON.stringify(data));
  //console.log(dataCommande)
}
