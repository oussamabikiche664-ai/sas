let prompt=require('prompt-sync')();
let premier=prompt("Veuillez entrer la premier nombre : ");
let operat=prompt("Veuillez choose une operateur : n/ + ou * ou / ou -  :");
let deux=prompt("Veuillez entrer la duxieme nombre ");

if(operat=="+"){
    console.log("Resultat : " + premier + deux);
}
else if (operat=="-"){
    console.log("Resultat : " + premier - deux);
}
else if (operat=="/"){
    console.log("Resultat : " + premier / deux);
}
else if (operat=="*"){
    console.log("Resultat : " + premier * deux);
}
else 
    console.log("choix invalide")