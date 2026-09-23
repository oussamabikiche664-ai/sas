let prompt = require('prompt-sync')();

let account = {
    owner: "Tayeb", balance: 5000, type: "saving"
};
let choix = 0;
function menu() {
    console.log("1-Afficher le solde");
    console.log("2-Deposer de l'argent")
    console.log("3-Retirer de l'argent ")
    console.log("4-Afficher les informations du compte :")

    choix = +prompt(" Veuillez choose une nombre :");

if (choix == 1) {
    afficher()
    menu()
}
else if (choix == 2) {
    deposer()
    menu()
}
else if (choix == 3) {
retirer()
}
else if (choix == 4) {
    console.log("owner : " + account.owner + "Balance : " + account.balance + "type : " + account.type)
}
} 
function afficher() {
console.log("your balance is :", account.balance);
}

function deposer() {

    let montant1 = +prompt("Veuillez entrer le montant que vous sohaitez depose : ");
    if (montant1 > 0) {
         account.balance += montant1;

        console.log("Operation reussie ..votre solde maintenat est : " ,account.balance, " DH");
    }
    else
        console.log(" veuillez ressayer . impossible pour depose cette montant .");
}
function retirer() {
    let retire = + prompt("veuillez entrer le montant pour retirer : ");
    if (retire < account.balance ) {
             account.balance -= retire;
        console.log("Operation reussie...maintenant votre balance est : ",account.balance," DH");
    }
    if (retire <= 0 || retire > account.balance) {
        console.log("Veuillez ressayer . impossible pour retirer cette montant : ");
    }
    menu()

}
menu()
//function informations(){
//  let information1="Nom : " + account.owner + "balance "
//}

