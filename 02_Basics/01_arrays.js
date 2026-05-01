// Array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]

// new array() constructor - Rare case: when you want an empty array of fixed size.
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1])
// console.log(myHeroes[1])
// console.log(myArr2[1])

// Array Methods

//  myArr.push(6) // Adds one index in end of array
//  myArr.push(7) 
//  myArr.pop() //Elimates last index in array
//  myArr.unshift(9) // Adds one index in start of array
//  myArr.shift() //Elimates fist index in array

//  console.log(myArr)

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));

// const newArr = myArr.join(); // binds the array and converts them to string
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr);

console.log("A",myArr);
// Returns a copy of a section of an array. For both start and end, 
// a negative index can be used to indicate an offset from the end of the 
// array. For example, -2 refers to the second to last element of the array.
const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr);
// Removes elements from an array and, if necessary, inserts new elements 
// in their place, returning the deleted elements.

const myn2 = myArr.splice(1,3) 
console.log("C",myArr);
console.log(myn2)


