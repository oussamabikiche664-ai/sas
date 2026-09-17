let prompt = require('prompt-sync')();
let film=prompt("Veuillez entrer la duree de film : ");
film=Number(film)
if (film< 60){
    console.log("Duree :" + film + "minutes")
     console.log("Court metrage");
}
else if (film>60 && film<120){
    console.log("Duree :" + film + " minutes")
     console.log("Film standard");
}
else 
     console.log("Duree :" + film + "minutes")
console.log("Film long");