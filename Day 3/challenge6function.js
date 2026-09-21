function verifierMotDePasse(motDePasse){
     
    return(motDePasse.includes('@'));
}
let mot="code1234@";
let mot1="code123";
console.log(verifierMotDePasse(mot));
console.log(verifierMotDePasse(mot1));