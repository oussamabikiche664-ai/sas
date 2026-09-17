let prompt=require('prompt-sync')();
Nombre=prompt("entrer votre nombre :");
if(Nombre < 0){
    console.log("Le nombre est negatif.");
}
else if (Nombre==0){
    console.log("Le nombre est egal a zero.")
}
else 
    console.log("Le nombre est positif.");