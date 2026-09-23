let employee = {
    firstName : "Sara" , lastName : "Amrani" , salary : 7000 , bonus : 1000 , absenceDays : 2 
};
let salaireFinal = (employee.salary + employee.bonus) - (employee.absenceDays * 200) ;
console.log("Le Salaire de base : " + employee.salary + " DH" );
console.log("Le bonus : " + employee.bonus + " DH");
console.log("Les penalites : " + (employee.absenceDays * 200 ) + " DH");
console.log("Le salaire final : " + salaireFinal + " DH");