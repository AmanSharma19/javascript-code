// for of loop
// array specific loop
// [{}, {}, {}, {}]

const arr = [1,2,3,4,5,6]
for (const a of arr) {
    console.log(a);
}

// maps --> unique values
const mp = new Map()
mp.set('IN', "India") // set add the values in the map in key value pair
mp.set('ENG', "England") // maintains order
console.log(mp)

for (const key of mp){
    console.log(key) // return the elements in array 
}

// if we want to print key value individually
for (const [key, value] of mp){ // [] array destructuring
    console.log(key, " :- ", value) 
}
// objects are not itterateable in the for of loop ************



