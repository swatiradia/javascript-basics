module.exports = class Person
{

     age = 25

     get location(){

          return 'canada'
     }

     constructor(firstName, lastName){

          this.firstName = firstName
          this.lastName = lastName
     }

     fullName(){
          
          console.log(this.firstName+this.lastName)
     }

}