let prompt=require('prompt-sync')();
N=+prompt("Veuillez entrer une valeur : ");
for(let i=1 ; i<=N ; i++){
    diviseur=N%i;
    if (0==diviseur){
        console.log(i);
    }
}
