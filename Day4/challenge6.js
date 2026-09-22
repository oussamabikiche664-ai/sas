function repeterChaine(chaine , fois){
let cst = "" ;
    for(i=0 ; i!==fois ; i++){
       cst = cst + chaine;
    } return cst ;
}
let a=repeterChaine("js",3);
console.log(a); 