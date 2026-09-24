let prompt = require('prompt-sync')();

function recherch() {
    let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
    let num = +prompt("entrer un nombre pour recherche : ");
    let a = -1;

  
    let start = 0;
    let end = ids.length - 1;
    while (end > start) {
        if (ids[start] == num ) {
            break

        } 
        else if (ids[end]==num){
            break
        }
        
   start++ ;  end--; }
   if (ids[start] == num ) {
            return start ;

        } 
        else if (ids[end]==num){
            return end ;
        }
        else
            return a; 
} console.log(recherch()); 















//for (let i = 0; i < ids.length; i++) {
    //if (ids[i] === num) {
    //       return i;
    //   }}
    //for (let j = ids.length - 1; j >= 0; j--) {

    //        if (ids[j] === num) {
    //         return j;
    //      } 
    //     else

    //          return a;

    // }