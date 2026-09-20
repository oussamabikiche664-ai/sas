function fusionnerTableaux(tab1, tab2) {
    let tab3 = [];
    for (i = 0; i < tab1.length; i++) {
        tab3[tab3.length] = tab1[i];
    }
    for (i = 0; i < tab2.length; i++) {
        tab3[tab3.length] = tab2[i];
    }

    return tab3;
}
let tab4 = [1, 2];

let tab5 = [3, 4];

let tab6 = fusionnerTableaux(tab4, tab5);
console.log(tab6);
