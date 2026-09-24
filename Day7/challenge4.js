function decroissant(){
    let temperature=[22 , 19 , 30, 15, 28, 17, 25];

 
let compteur=0;
for (let i=0 ; i<temperature.length ; i++){
    for (let j=i+1;j<temperature.length ;j++ ){
        if(temperature[i] < temperature[j]){
         
           let tab = temperature[i];
            temperature[i]=temperature[j];
            temperature[j]=tab;

            compteur=compteur+1;
        }
    }
    

}  console.log(compteur);
 return temperature ;

} 
console.log(decroissant() );