
/*
fetch("http://localhost:3000/api/furniture")
    .then(response => response.json())
    .then(furnitures => {
        console.log(furnitures)
        let container = document.getElementById('furnitureContainer');
        furnitures.forEach(furniture => {
            let article = ``
            container.innerHTML += article;
        })
    });
*/
function displayCart {
    let cartItems = localStorage.getItem('cartNumbers');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
}


/*
// boucle pour le vernis 

for (var i = 0; i < choix.length; i++);
var option = document.createElement('option');
option.textContent = choix[i];
option.id = "vernis";
vernis.appendChild(option);

*/