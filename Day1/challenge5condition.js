let prompt=require('prompt-sync')();
let note=prompt ("entrer votre note :");
note=Number(note);


  if(note<10){
    mention="Echec"
       console.log("Note :" + note);
       console.log("Mention : " + mention);
  }
  else if(note<=11.99 && note>=10){
    mention="Passable"
       console.log("Note :" + note);
       console.log("Mention : " + mention);
  }
else if(note<=13.99 && note>=12){
    mention="Assez bien"
       console.log("Note :" + note);
       console.log("Mention : " + mention);
}
else if(note<=15.99 && note>=14){
    mention="Bien"
       console.log("Note :" + note);
       console.log("Mention : " + mention);
}
else if(note<=17.99 && note>=16){
    mention="Tres bien"
       console.log("Note :" + note);
       console.log("Mention : " + mention);
}
else
    mention="Excellent"
       console.log("Note :" + note);
       console.log("Mention : " + mention);




