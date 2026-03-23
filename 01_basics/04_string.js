// console.log("Hello " + " World") string concatenation

// `` -> string interpulation. Inside this we can use our variable using ${} 
const name = "Aman"
const repo = "javascript"
const repoCount = 30
console.log(`Hello my name is ${name}. I am working in ${repo} repo. The repo count is ${repoCount} `)


// another way to declare string using object
const gameName = new String("Free Fire")
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('i'))

console.log(gameName.substring(0,4)) // we cannot use negative values
console.log(gameName.slice(-8,4)) // we can use negative values

const str = "    jbdjdj        "
console.log(str.trim()) // trim -> to remove extra spaces 1. trimStart() 2. trimEnd()

const url = "https://Aman.com/aman%20s8"
console.log(url)
console.log(url.replace('%20','')) // replace the substring
console.log(url.includes("Aman")) // check that the letter is in the given string or not
console.log(url.split('/'))