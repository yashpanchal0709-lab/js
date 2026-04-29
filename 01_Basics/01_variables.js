//let const var

const accountId = 144553
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// If we declare variable but does not mention value 
// then it will be declared as undefined

// accountId = 2  // not allowed // {} - Scope

accountEmail = "hg@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

/* Please Do not use var, 
Because of issue in Block Scope and Functional Scope */

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);