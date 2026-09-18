let prompt=require('prompt-sync')();
let somme=0;
let valeur;
while(valeur!==0){
    valeur=+prompt("Veuillez entrer une valeur : ");
    
    console.log("saisier : " + valeur );
somme += valeur;
} 
console.log("Somme : " + somme);