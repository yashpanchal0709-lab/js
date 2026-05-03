// functions is like a package

function saymyname(){
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
}

// saymyname()
// saymyname: reference
// (): execute

                       //Parameters
// function addtwonumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addtwonumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
                            //Arguments
const result = addtwonumbers(3, 4)
// console.log("Result:", result)

function userloginmessage(username = "sam"){
    // if(username === undefined)
    if(!username){
        console.log("Please enter a unsername")
        return
    }
    return `${username} just logged in`
}
// console.log(userloginmessage ("hitesh"));
// console.log(userloginmessage("hitesh")); //overwrites sam

// ! converts true to false, and false to true
// "" and undefined as consodered false

//FUNCTION 2
// ... => Also called as REST and Spread Operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));