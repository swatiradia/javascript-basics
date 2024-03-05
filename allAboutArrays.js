// To create a array that holds six values

let marks = Array(6)
let grades = new Array(20, 30, 40)

// Without explicitly mentioning Array

let mark = [10,20,30,49,59]
console.log(mark[2])
console.log(grades)
console.log(grades.length)

// pop and push method can ne used to add and delete values in the array

grades.push(65)
grades.push(12)
console.log(grades)
grades.pop()
console.log(grades)
console.log(grades.indexOf(65))

// To check something is present in th array

console.log(grades.includes(23))


// Using Reduce function instead of for loop to add array elements Filter and Map Functions on Arrays

let sum = 0;
let totalMarks =grades.reduce((sum, mark) => sum+mark,0)
console.log(totalMarks)

// Printing only even numbers 

var scores = [12, 13, 14, 15, 16]
var evenScores =[]

for(i =0; i<scores.length; i++){
   if(scores[i]% 2 == 0){
       evenScores.push(scores[i])
   }
}

console.log(evenScores)

// Printing only even numbers using filter function instead of for loop

let newEvenScores = scores.filter(score=>score % 2 ==0)
console.log(newEvenScores)

// Printing newEvenScores elements multiplied by 3 using map method

// let multipleOfThree = newEvenScores.map(score=> score*3)
// console.log(multipleOfThree)

// // console.log(scores.join('+'))

// let totalOfTheArray = multipleOfThree.reduce((sum, val)=> sum + val, 0);
// console.log(totalOfTheArray)

// Applyiong function on function 

let combinedFunctionsArray = newEvenScores.map(score=> score*3).reduce((sum, val)=> sum + val, 0);
console.log(combinedFunctionsArray)

var scores1 = [12, 3, 15, 16, 18, 20, 25]

console.log(scores1.sort((a, b) => a-b))