// for each cannot return any value 
const myNums = [1,2,3,4,5,6]
const newNums = myNums.filter((num) => { // filter take a call back funtion inside it
  return num < 4 // implict and explicit return 
}) // filter returns the values
console.log(newNums)

const newNum1 = []

myNums.forEach((num) => {
    if(num > 4){
        newNum1.push(num)
    }
})

console.log(newNum1)

// map
const newNum2 = myNums.map((num) => num + 10)
console.log(newNum2)

// chaining 
const newNum3 = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 40) // first result will be passed in the second method
console.log(newNum3)
