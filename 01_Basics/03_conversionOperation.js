//Conversion Operation 

let score = "Yash"

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (Not A Number)
// true => 1, false => 0

let isLoggedIn = "Yash"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true, 0 => false
// "" => false
// "Yash" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof (stringNumber))

// ************************* OPERATIONS **************************

// String to Number Conversion Confusing

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Hello"
let str2 = " Yash"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log( (3 + 4) * 5 % 3);

// console.log(+true)
// console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter             // Prefix Operator
// gameCounter++          // Postfix Operator
// console.log(gameCounter);

// Javascript Demo: Expression - Increment Operators

let x = 3
const y = x++

console.log(`x:${x}, y:${y}`)
// expected output : x=4, y=3
// `` => Back Ticks

let a = 3
const b = ++a

console.log(`a:${a}, b:${b}`)
// expected output : a=4, b=4
