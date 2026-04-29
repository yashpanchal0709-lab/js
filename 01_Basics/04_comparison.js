// Comparison 

// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

// Avoid Null and Undefined Comparison to avoid confusion of the output

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// The reason is that an equality check == and
// Comparison check > < >= <= works differently.
// Comparison converts null to a number, treating it as 0.
// That's why 3) null >= 0 is true and 1) nul > 0 is false.

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)
console.log(undefined < 0)

// === Strictly check

console.log("2" === 2)