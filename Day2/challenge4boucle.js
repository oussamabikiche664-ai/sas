let prompt=require('prompt-sync')();
let N=prompt("entrer une nombre : ");
N=Number(N)
let multiple=1;
for (i=1 ; i<=10 ; i++){
    multiple=N*i
    console.log(N*i )

}
console.log( multiple);