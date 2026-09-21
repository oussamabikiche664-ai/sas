const formatMAD = (val) => val + "DH" ;
function convertirMontant(montant , taux , formatter){

let mult= montant * taux ; 
return formatter(mult);

}
let resultat=convertirMontant(100,10.5, formatMAD);
console.log(resultat);