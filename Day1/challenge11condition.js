let prompt=require('prompt-sync')();
let choix=prompt("Veuillez entrer votre choix :");

choix=Number(choix);
let quantite=prompt("entrer la quantite : ");
quantite=Number(quantite);
let Prix=22;
let plat ="Pizza";
let total= Prix*quantite;

let reduction=total *0.1;
let totalpayer= total-(total*0.1);
switch(choix){
    case 1 : 
   plat= "Pizza";
    Prix=60;
    break;
    case 2:
        plat="Burger";
        Prix=45;
        break;
        case 3 :
            plat ="Tacos" ;
            Prix= 40 ;
            break;
            case 4 :
                plat = "Salade" ;
                Prix= 30;
                break;
                default :
                 console.log("choix invalide")
}
if (total>=200){
    console.log("Plat : " + plat );
   console.log("Quantite : " + quantite);
    console.log("Prix unitaire : " + Prix + " DH");
    
    console.log("Sous-total : " + total);
    console.log("Reduction : " + reduction + " DH");
    console.log("Total a payer : " + totalpayer + " DH");
    
}
else
console.log("Plat : " + plat );
    console.log("Quantite : " + quantite);
console.log("Prix unitaire : " + Prix + " DH");
   
    
    
    
    console.log("Total a payer : " + total + " DH");
