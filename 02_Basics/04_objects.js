// const tinderUser = new Object() // singleton object
// console.log(tinderUser)

const tinderUser1 = {} // Non singleton object
tinderUser1.id = "123abc",
tinderUser1.name = "YashPanchal"
tinderUser1.isLoggedin = false
// console.log(tinderUser1)

const regularuser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Yash",
            lastname:"Panchal",
        }
    }
}

// console.log(regularuser.fullname?.userfullname.firstname)

//optional chaining : ?

//Merging two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c",6: "d"}

// const obj3 = {obj1, obj2}
// {}: target , obj1,obj2,obj4: source
// const obj3 = Object.assign({},obj1,obj2,obj4)

// ... => spread 
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        name: "Yash",
        email:"y@gmail.com"
    },
    {
        id: 2,
        name: "Yash",
        email:"g@gmail.com"
    },
    {
        id: 3,
        name: "Yash",
        email:"j@gmail.com"
    },
    {
        id: 4,
        name: "Yash",
        email:"k@gmail.com"
    }
]

// console.log(users[3].email)

// console.log(tinderUser1)

// console.log(Object.keys(tinderUser1))
// console.log(Object.values(tinderUser1))
// console.log(Object.entries(tinderUser1)) // less used

// console.log(tinderUser1.hasOwnProperty("isLoggedin"))

//Destructuring 
// Destructing in object is common, but rare in array

const course = {
    coursename: "js in hindi",
    couseprice: 999,
    courseinstructor: "hitesh"
}

// course.courseinstructor

const {courseinstructor: instructor} = course
console.log(instructor)

//React Method
// const navbar = ({company}) =>
// {

// }
// navbar (company ="hitesh")

//Json: key value is also mentioned as strings
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "couseprice": 999
// }

// [
//     {},
//     {},
//     {}
// ]

