const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

//Push
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

//Merged 2 arrays properply //Concat
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// ... => spread 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// Rarely used array method
const another_array = [1,2,3, [4,5,6], 7,[6,7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

//Data Scrapping:
// console.log(Array.isArray("Yash"))
// console.log(Array.from("Yash"))
// Empty Array passed in output
// console.log(Array.from({name : "Yash"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
