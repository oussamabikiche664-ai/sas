let compter = 0;
function compterVoyelles(chaine) {
    
   let a= chaine.toLowerCase();
    for (i = 0; i !== chaine.length ; i++) {

        if (a[i] ==='a' ||a[i] ==='e'|| a[i] ==='i' ||a[i] ==='o' ||a[i] ==='u' ||a[i] ==='y'  ) {
             compter = compter + 1;
        }
        
           
    }
    return compter;
}

console.log(compterVoyelles("OusAma"));
