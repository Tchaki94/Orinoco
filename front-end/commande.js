fetch("http://localhost:3000/api/furniture")
    .then(response => response.json())
    .then(furnitures => {
        
        
    }).catch(error => {
        let container = document.querySelector('.container-commande');
        container.innerHTML = `<h1> Une erreur est survenue: ${error.message}</h1>`
    });


// chargemnt de la commande
function chargemntCommande (data) {

    let articles = JSON.parse(localStorage.getItem('commande'));
    let contenair = document.querySelector('.container-commande');



}

let btnRefresh = document.querySelector('#refresh');
btnRefresh.addEventListener('click', () => {
    localStorage.clear();
    redirection();
})

function redirection () {
    document.location.href="accueil.js"
}