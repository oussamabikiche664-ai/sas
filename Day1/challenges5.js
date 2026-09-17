let prompt= require('prompt-sync')();
let film= prompt("allez fournit la duree du film en minutes:");
if (film<60){
     categorie= "Court metrage";
}
 if (film>60 && film<=120){
     categorie = "Film standard ";
}
if (film > 120){
   categorie="Film long";
   
} 
 console.log("Duree : "+ film + " minutes\nCategorie : " + categorie )