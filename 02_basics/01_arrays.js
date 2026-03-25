// array
const myArr = [0,1,2,3,4,5]
console.log(myArr[4])
// arrays are resizable with mix-datatype
// shallow copy is a copy whose property share the same reference point as those of the siurce object from which the copy was made 
myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9) // we don't use it because it make CPU extra loaded because to add an element in front of an array we need to shift all the other elements
myArr.shift() // remove the first element
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(4)) // -1 when the value does not exist inside array
console.log(myArr)
const Arr = myArr.join() // joins all the elements of array in a string
console.log(Arr)

// slice and splice
console.log("A ", myArr)
const myn1 = myArr.slice(1,3) // returns a part of array start from 1 ends before 3 do not include upper limit
console.log(myn1) // original array remains the same

const myn2 = myArr.splice(1,3) // take out this part of array and remove them from the original array
console.log(myn2)
console.log(myArr)



