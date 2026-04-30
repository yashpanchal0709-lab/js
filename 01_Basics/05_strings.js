const name = "Yash"
const repoCount = 50

// console.log(name + repoCount + "Hello World") // outdated code

// String Interpolation:
// console.log(`Hello my name is ${name} and my Repo Count is ${repoCount}`)

// Declaring String Methods
const gameName = new String('YashPanchal-yp')
// console.log(gameName[0]);
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

//No negative value in substring
const newString = gameName.substring(0, 3)
// console.log(newString);

//Supports negative value in slice
const anotherString = gameName.slice(0, 1)
// console.log(anotherString);

const newstringOne = "    YASH     "
// console.log(newstringOne);
// console.log(newstringOne.trim());

const url = "https://yashpanchal/yash%20panchal"
console.log(url.replace('%20', '-'));

console.log(url.includes('yash'))

console.log(gameName.split);
