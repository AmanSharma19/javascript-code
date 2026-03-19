console.log("Aman")
const accountId = 144553
let accountEmail = "aanajbwa@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// accountId = 2 not allowed
console.log(accountId)
accountEmail = "bdbv@gmaol.com"
accountCity = "Gurugram"
accountPassword = 123112

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountEmail, accountId, 
    accountPassword, accountCity])
