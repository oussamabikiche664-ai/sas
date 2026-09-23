let prompt = require('prompt-sync')();
let nom = prompt("Veuillez entrer nom de product : ");
let category = prompt("Veuillez entrer la category : ");
nom = nom.toUpperCase();
category = category.toLowerCase();
let product = {
    name: "TV", price: 5000, category: "samsung", available: " "
}

if (nom == product.name && category == product.category) {
    product.available = "oui cette produit est disponnible  "
    console.log(product.available);
    let quantity = + prompt("Veuillez entrer la quantity : ")
    product[quantity] = quantity;
    let prixTotal = product.price * quantity;
    console.log("le nom : " + product.name);
    console.log("le prix : " + product.price + " DH");
    console.log("Categorie : " + product.category);

    console.log("le prix total du stock : " + prixTotal + " DH");
}

else{
    product.available = "cette produit n'est pas disponnoble ";
console.log(product.available);}
