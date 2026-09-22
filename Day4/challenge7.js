function ramplacerCaractere(chaine, ancien, nouveau) {
 let chaine2 = "";

    for (let i = 0; i !== chaine.length; i++) {
       
        if (chaine[i] === ancien) {
            chaine2 = chaine2+nouveau
        }
        else
            chaine2 += chaine[i]
    }
    return chaine2;
}
let a = ramplacerCaractere("oussama", 'm', 'o');
console.log(a);