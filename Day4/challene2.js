function compterLettre(chaine, a) {
    let count = 0;
    for (let i = 0; i !== chaine.length; i++) {
        if (chaine[i] !== a) {
            continue
        }
    else 
        count = count + 1;
    }
    return count;
}
console.log(compterLettre("oussama", "a"));