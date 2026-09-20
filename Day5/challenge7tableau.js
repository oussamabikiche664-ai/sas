function filtrerPairs(tab) {
    let pairs = [];

    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] % 2 === 0) {
            pairs[pairs.length] = tab[i];

        }
        
    }return pairs;
}
let tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Nombres = filtrerPairs(tab1);

console.log(Nombres);

            