function obtenirHeureActuelle(){
    let prompt=require('prompt-sync')();
     heure=+prompt("entrer lheure : ");
    
     min=+prompt("entrer minutes : ");
    
     sec=+prompt("entrer secondes : ");

let temp=heure+":"+ min+":"+ sec;
return temp;
}
console.log(obtenirHeureActuelle());