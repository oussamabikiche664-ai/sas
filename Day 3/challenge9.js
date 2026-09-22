const MonCompteur = creerCompteur(11);
function creerCompteur(valeurinitiale=0) {

return function MonCompteur(){
    valeurinitiale = valeurinitiale + 1 ;
    return valeurinitiale;
}
}  
console.log(MonCompteur());
console.log(MonCompteur());
