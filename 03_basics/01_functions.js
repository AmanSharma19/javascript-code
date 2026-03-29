//function defination 
function sayMyname() {
    console.log("Aman")
}

// sayMyname()

function addTwoNum(number1, number2){ // inside () everything is called as parameter 
    console.log("Number") // study about this statement
    return number1 + number1
}

const num = addTwoNum(3,5) // inside () everything is called argument
console.log(num);

function calculateCartPrice(...num){ // when we don't know how many arguments we need to pass we use ... rest operator
    return num 
}
console.log(calculateCartPrice(100,200,300,400))

function calculateCartprice(val1, val2, ...num){
    return num 
}
console.log(calculateCartprice(100,200,300,400))

// object inside function
const user = {
    name: "Aman",
    price: "199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

// handleObject(user)
// passing object directly
handleObject({
    username: "Aman",
    price: "299"
})

// passing arrays inside function
const arr = [200, 3000 ,300393]
function returnSecond(getArray){
    return getArray[1]
}

// console.log(returnSecond(arr))
console.log(returnSecond([27,2982, 292])) // directly passsing the array


