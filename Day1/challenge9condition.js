let prompt=require('prompt-sync')();
let transport=prompt("Veuillez choise un moyenne du transport : 1  , 2 , 3 , 4 , 5  :");
transport=Number(transport)
switch(transport){
 case 1:
    console.log("Transport : Bus    Prix :5 DH");
break;
    case 2: 
    console.log("Transport : Train  Prix : 20 DH");
    break;
    case 3:
        console.log("Transport : Tramway Prix :  6 DH");
        break;
        case 4:
            console.log("Transport : Taxi  Prix : 15 DH");
            break;
            case 5: 
            console.log("Transport : Velo  Prix : 10 DH");
break;
default:
    console.log("choix invalide");


}