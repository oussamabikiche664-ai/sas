let prompt=require('prompt-sync')();
let base =prompt("Veuillez entrer la base : ");
base=Number(base)
let e=prompt("Veuillez entrer Exposant :");
e=Number(e)
let i=1;
while(i<=e){
i++
}
console.log(base**e);