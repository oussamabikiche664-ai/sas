let prompt =require('prompt-sync')();
let n=prompt("entrer combien de missions : ");
n=Number(n)
let i=1;
while(i<=n){
    i++
}
console.log("Mission " + n);
    console.log("Score : " + n*100);