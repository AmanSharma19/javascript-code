// singleton object ->  object always made from constructors

// object literals
// Object.create
// objects k andr key:value pair ata h 
// value can be anything 
// key can be anything unlike arrays not only index
// each key value pair is comma separated


// Using symbol as a key important 
const sym1 = Symbol("key1")
const JsUser = {
    name: "Aman",
    "full name": "Aman Jan",
    age: "20",
    [sym1]: "mykey", // using symbol as a key
    location: "Jaipur",
    email: "amanjan@gmail.com",
    isLogin: false,
    lastloginDays: ["monday", "saturday"]
}

// types to access key-value
console.log(JsUser.age)
console.log(JsUser["email"]) // it is taking the key as string as email is string
// there is no way we can access the full name using dot so here we need to use the second way to access the value of full name key
// JsUser.full name -> not possible
console.log(JsUser["full name"])
console.log(JsUser[sym1]) // to access the value of sym1 key we need to use the second way as sym1 is a symbol and not a string

JsUser.email = "aman.gmail.com" // change value 
// Object.freeze(JsUser.isLogin) // we wont be able to change the values

console.log(JsUser)


// function as a key
JsUser.greeting = function(){
    console.log("Welcome All!!")
}
JsUser.greetingTwo = function(){
    console.log(`Welcome All!!, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())




