let prompt=require('prompt-sync')();
Age = prompt(" Veuillez entrer votre age : ");
if (Age>=18){ 
    console.log("Acces autorise");
}
else 
    console.log("Acces refuse");
