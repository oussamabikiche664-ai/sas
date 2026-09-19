let prompt=require('prompt-sync')();
nom=prompt("Veuillez entrer un element : ");
let tableau=["pomme" , "banane"];
let tab=tableau;
if(nom==="pomme" || nom==="banane"){
    console.log("True");
}
else
   console.log("False");

