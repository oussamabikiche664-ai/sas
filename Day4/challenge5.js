
function estPalindrome(chaine) {
    let mot = chaine;
    let tab = mot.split("");
    let inverse = [];
    for (let i = 0; i !== tab.length; i++) {
        inverse[i] = tab[tab.length - 1 - i];

    } let mot1= tab.join("");
    
    let text = inverse.join("");
    


    if (mot1 === text) {
        return true;
    }
    else
        return false;
}
let a = estPalindrome("kayak");
console.log(a);