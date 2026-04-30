const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString.length)
//toFixed used in mostly ecommerce website 100 to 100.00
// console.log(balance.toFixed(2))

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// ****************************** Maths ***************************************

// console.log(Math)
// absolute (abs) converts negative value to positive value
// console.log(Math.abs(-40));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.min(4,6,8,10));
// console.log(Math.round(4,6,8,10));

// In Math mostly used method is random, values in between 0 to 1
// console.log(Math.random());
// console.log((Math.random()*10) +1);
// console.log(Math.floor(Math.random()*10) +1); // Round of Values

// Trick

const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1 + min)) + min)

// Dice
const min1 = 1
const max1 = 6
console.log(Math.floor(Math.random() * (max1 - min1 + 1 + min1)) + min1)