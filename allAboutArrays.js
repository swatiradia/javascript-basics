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

// To check somethiong is present in th array

console.log(grades.includes(23))


// Reduce, Filter and Map Functions on Arrays

let sum = 0;
let totalMarks =grades.reduce((sum, mark) => sum+mark,0)
console.log(totalMarks)