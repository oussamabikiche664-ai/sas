let prompt=require('prompt-sync')();
function recherche(){
let nombre=prompt("Veuillez entrer le nombre : ");
let tab=[4,8,15,16,23,42];
for ( let i=0 ; i<=tab.length ; i++){
if(tab[i]==nombre){
    return true
}
else 
    return false
}


}
console.log(recherche());