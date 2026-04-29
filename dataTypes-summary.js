// # Primitive Data Types:

// 7 Types of Primitive Data Types:

// String, Number, Boolean, null, undefined, Symbol, BigInt

//Examples:

const name = "Yash"                   //string
const score = 100                     // number
const scoreValue = 100.3              // number

const isLoggedIn = true               // boolean
const outsideTemp = null              // null
let userEmail;                        // undefined

const id = Symbol('123')              // symbol
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 233453464562342365n // BigInt

// # Reference (Non Primitive Data Types):

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]; // array

let myObj = {                                    // object
    name: "Yash",
    age: 22,
    isLoggedIn: true
};

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)
console.log(typeof anotherId)

// Master this Objects and Browser web events/ browser events
// to master Javascript.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// JavaScript is a dynamically typed language. This means that variable types
//  are determined at runtime, and you do not need to explicitly declare the
//  type of a variable before using it. You can assign different types of 
// values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean

// On the other hand, statically typed languages require you to declare 
// the variable's type explicitly, and the type checking is done at 
// compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, 
// and they require you to specify the variable type explicitly when 
// declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String

// JavaScript's dynamic typing allows for more flexibility but can lead 
// to potential runtime errors if not handled carefully. Static typing, 
// on the other hand, provides better type safety at the cost of some 
// initial verbosity and strictness.
