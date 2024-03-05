const arr = [1, 2, 3, 4, 5, 6]

// 1. map() - This method creates a new array with the results of calling a provided function on every element in this array.

const mapped = arr.map(element => element +30)
console.log("The output of map() function \n"+mapped+ "\n")

// 2. filter() - This method creates a new array with only elements that passes the condition inside the provided function.

const filtered = arr.filter(element => element ===2 || element === 4)
console.log("The output of filter() function \n"+filtered+ "\n")

// 3. sort() - This method is used to arrange/sort array’s elements either in ascending or descending order.

const alphabet = ["f", "a", "c", "v", "z"]

    // sort in descending order
descend = arr.sort((a,b) => a > b ? -1 : 1)
console.log("The output of sort() function in descending order \n"+descend+ "\n")

    // sort in ascending order
ascend = alphabet.sort((a, b) => a > b ? 1 : -1)
console.log("The output of sort() function in ascending order \n"+ascend+ "\n")

//4. forEach() - This method helps to loop over array by executing a provided callback function for each element in an array.
console.log("The output of forEach() function \n")
arr.reverse().forEach(element => {console.log(element)})
console.log("\n")

// 5. concat() - This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.
const arr1 =["a", "b", "c"]
const arr2 = ["f", "g", "h"]
console.log("The output of concat() function \n"+ arr1.concat(arr2)+ "\n")

// 6. every() - This method checks every element in the array that passes the condition, returning true or false as appropriate.

const arr3 = [, 2, 3, 4, 5, 6, 7, 8]

    // all elements are greater than 5
    const greaterThanFive = arr3.every(element => element > 5)
    console.log("The output of every() function greater than 5 \n"+greaterThanFive+ "\n")

    // all elements are less than 9
    const lessThanNine = arr3.every(element => element < 9)
    console.log("The output of every() function less than 5 \n"+lessThanNine+ "\n")

// 7. some() - This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

const greaterNum = arr.some(elemenet => elemenet > 5)
console.log("The output of some() function \n"+ greaterNum+ "\n")

// 8. includes() - This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

console.log("The output of includes() function \n" +arr.includes(3)+ "\n")


// 9. join() - This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

const name = ["s","w","a","t","i"];
console.log("The output of join() function \n"+ name.join("-")+ "\n")


// 10. reduce() - This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const reduced = arr.reduce((sum, total)=> sum +total)
console.log("The output of reduce() function \n"+ reduced + "\n")

// 11. find() - This method returns the value of the first element in an array that pass the test in a testing function.

const found = arr3.find(elemenet => elemenet >5 )
console.log("The output of find() function \n"+ found + "\n")

// 12. findIndex() - This method returns the index of the first element in an array that pass the test in a testing function.

const namesCollection = ["swati", "radia", "bhovi", "mihir"]
const indexFinder = namesCollection.findIndex( elemenet => elemenet === "john")
console.log("The output of findIndex() function \n"+ indexFinder + "\n")

// 13. indexOf() - This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

const indexOfMethod = namesCollection.indexOf( "bhovi")
console.log("The output of findIndex() function \n"+ indexOfMethod + "\n")

// 14. fill() - This method fills the elements in an array with a static value and returns the modified array.

const newArray = new Array(4)
console.log(newArray)
console.log(newArray.fill(12))

// 15. slice() - This method returns a new array with specified start to end elements.

console.log(name.slice(2, 4))

// 16. reverse() - This method reverses an array in place. Element at last index will be first and element at 0 index will be last.

console.log(name.reverse())

// 17. push() - This method adds one or more elements to the end of array and returns the new length of the array.

namesCollection.push("jack")
console.log(namesCollection)

// 18. pop() - This method removes the last element from the end of array and returns that element.

namesCollection.pop()
console.log(namesCollection)

// 19. shift() - This method removes the first element from an array and returns that element.

namesCollection.shift()
console.log(namesCollection)

// 20. unshift() - This method adds one or more elements to the beginning of an array and returns the new length of the array.

namesCollection.unshift("swati")
console.log(namesCollection)
