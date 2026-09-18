let prompt=require('prompt-sync')();
let n=prompt("entre une valeur : ");
 n=Number(n)
 let somme=0;
 for(i=1 ; i<=n ; i++){
    somme=somme+i;
 }
console.log("N = " + n);
console.log("Somme =" + somme);