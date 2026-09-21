

function inverserChaine(chaine) {
    let mot = chaine;
    let tab = mot.split("");
    let inverse = []; 
    
    for (i = 0; i !== tab.length; i++) {
     inverse [ i ] =tab[tab.length-1-i];
    }let text=inverse.join("");
    
   return text;
    
}
console.log(inverserChaine("oussama"))
