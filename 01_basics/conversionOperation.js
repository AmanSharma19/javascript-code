let score = "33abc"

console.log(typeof score);
let valueInString = Number(score);
console.log(valueInString);
// conversions
// 33 -> 33
// 33abc -> NaN
// abc33 -> NaN
// true -> 1
// false -> 0
// "" -> 0
// " " -> 0
// null -> 0
// undefined -> NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// 1 -> true
// 0 -> false
// "" -> false
// " " -> true
// null -> false
// undefined -> false   

// ************************Operations************************
let val = 3
let negVal = -val
console.log(negVal) 

console.log("1" + 2)
console.log(1 + "2")
console.log(1 + 2 + "2" + 2)
console.log("1" + 2 + 2)
// if strting is at first complete expressioin will be trreated as string 
// else number as number and string as string after string everything will be treated as string

console.log(+true) // 1   (+) converts into 1
console.log(+"") // 0  (+) converts into 0

// === checks the two numbers strictly i.e, checks datatype too but == do not check the datatypes
console.log("2" == 2) // true
console.log("2" === 2) // false
