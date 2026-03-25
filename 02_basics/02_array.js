const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

//marvel_heros.push(dc) // add the array inside array
// console.log(marvel_heros)
// console.log(marvel_heros[3])

const newArr = marvel_heros.concat(dc) // we  have to use new variable when using concat
console.log(newArr) 
 // spread -> ...
const newHeros = [...marvel_heros, ...dc] // prefer this insteda of concat because we can add multiple values in spread
console.log(newHeros)


// flatten array --> when we have a condition like array inside array inside array and so on. to convert it into a 1-D array we use flat
const arr = [1,2, [2,3,4], [9,1,2,3,[3,38]]]
console.log(arr)
const real = arr.flat(Infinity)
console.log(real)

console.log(Array.isArray("Aman")) // check the given is array or not
console.log(Array.from("Aman")) // converts anything to array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) //converts multiple individual elements into array


