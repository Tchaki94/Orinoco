// obtention du produit dans l'url

fetch("http://localhost:3000/api/furniture")
    .then(response => response.json())
    .then(furnitures => {
        console.log(furnitures)
        let container = document.getElementById('furnitureContainer');
        furnitures.forEach(furniture => {
            let article = `<article class="vitrine"><h2>${furniture.name}</h2><img class="imgShop" src="${furniture.imageUrl}" alt="${furniture.name}" ></article>`
            container.innerHTML += article;
        })
    });