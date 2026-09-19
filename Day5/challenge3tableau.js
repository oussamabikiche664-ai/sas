let trouverMax=[88,45,7,89,23];
let max=trouverMax[1];
for (i=0 ; i<trouverMax.lenght ; i++){
    if ( trouverMax[i] > max ){
        max=trouverMax[i];
    }
}
console.log("Max est :" + max);