// const big = new Number(100) // this is how we make sure that the value inside big ia a number
// console.log(big)


// console.log(big.toString()) // Now I can rumn multiple string functions on my number 

// const num = 24.28268
// console.log(num.toFixed(2)) // to set precision value after decimal

// console.log(num.toPrecision(3)) // number of letters before decimal'

// const hun = 100000000000
// console.log(hun.toLocaleString('en-IN')) // adds commas in between the numbers according to the place value

// functions for numbers

// do it yourself

//***********************Maths************************* */

console.log(Math.abs(-4)) // convert - to +

console.log(Math.round(4.3))
console.log(Math.ceil(4.3)) // it will choose the maximum value
console.log(Math.floor(4.3)) // it will choose minimun value

console.log(Math.sqrt(4)) // squate root
console.log(Math.pow(4,2)) // power

console.log(Math.max(2,3,4,1,3,2,2,4,5,6,4,534))
console.log(Math.min(2,3,4,1,3,2,2,4,5,6,4,534))


console.log(Math.floor(Math.random()*10) + 1) // rndom value b/w 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // minimum value  10 and maximum value 20

