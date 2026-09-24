function croissant() {
    let notes = [12, 5, 19, 4, 27, 8, 14];
   let tab ;
    for (let i = 0; i < notes.length - 1; i++) {

        for (let j = i + 1; j < notes.length; j++) {
            if (notes[j] < notes[i]) {
              tab = notes[i]
              notes[i]=notes[j];
              notes[j]=tab;
            }
            
            
            
        }
    } return notes;
}
console.log(croissant());