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