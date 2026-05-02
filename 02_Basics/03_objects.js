//singleton
// Object.create // constructor method

//Take Symbol and put it in objects keys
// Declaring Symbol
const mysym = Symbol('Key1')

//Object literals
const JsUser = {
    name: "Yash",
    "full name": "Yash Panchal",
    // Syntax of Symbol
    [mysym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "yash@google.com",
    isLoggedIn: false,
    lastloggedindays: ["Monday", "Friday"]
}

//methods to call objects
// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log(JsUser[mysym]);

// Object Values Overwrite with =
JsUser.email = "yash@chatgpt.com"
// console.log(JsUser.email)

// Object.freeze(JsUser)
JsUser.email = "yash@microsoft.com"
// console.log(JsUser)

// Functions in Object
JsUser.greeting = function() {
    console.log("Hello JS Users");
}
JsUser.greetingTwo = function() {
    //string interpolation
    console.log(`Hello JS Users, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())