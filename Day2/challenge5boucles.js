let prompt = require('prompt-sync')();
let N = prompt("entrer la valeur de N :")
let X = prompt("entrer la valeur de X :")
N=Number(N)
X=Number(X)
let multiple=1 ;
for (let i=1 ; i<=N ; i++){
    multiple=X * i ;
      if(multiple<=N){
        console.log(multiple) ;
      }
    
    }
