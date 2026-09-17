
let livraison=40 ;
let prompt=require('prompt-sync')();
 let montant=prompt("Veuillez entrer le montant : ");
 montant=Number(montant);
let Total= montant + livraison ;
if (montant>=500){
    console.log("Montant de la commande : " + montant + " DH");
    console.log("Livraison : Gratuite");
    console.log("Total a payer :" + montant + "DH");
}
if (montant<500){
    console.log("Montant de la commande : " + montant + " DH");
    console.log("Livraison : 40 DH");
    console.log("Total a payer :" + Total + " DH");}