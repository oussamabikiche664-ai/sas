let prompt=require('prompt-sync')();
let choix=prompt("veuillez choose un nombre 1 , 2 , 3 , 4 : ");
choix=Number(choix);
if (choix==1){
  console.log("1  Afficher le profil ");
}
else if (choix==2){
    console.log("2  Afficher les parametres");
}
else if(choix==3){
    console.log("Afficher les notifications ");
}
else if (choix==4){
    console.log("4  Se deconnecter");
}
else 
    console.log("Choix invalide");