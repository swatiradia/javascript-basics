const Person = require("./classPerson.js")

class Pet extends Person{

    // get location(){

    //    return 'BlueCross'
    // }

    constructor(fistName, lastName){

        super(fistName, lastName)
    }
}
 

let pet = new Pet("Mel", "son")
pet.fullName()
console.log(pet.location)

