function additionnerTout(...args) {


    

    let sum=args.reduce((total,current) => total + current , 0)

return sum;

}

console.log(additionnerTout(1,2,3,4,5,6));