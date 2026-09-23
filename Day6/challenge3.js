let product={
    name: "TV" , price : 5000 , category : " Samsung" , quantity : 15 , available : "oui c'est disponible " 
}
let prixTotal= product.price * product.quantity ;
console.log("le nom : " +product.name); 
console.log("le prix : " +product.price + " DH");
console.log("Categorie : " + product.category);
console.log("le prix total du stock : " + prixTotal + " DH");