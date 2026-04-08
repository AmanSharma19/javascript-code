// reduce method

const myNums = [1,2,3,4]
const myTotal = myNums.reduce(function (acc, curr){
    console.log(`acc: ${acc}, curr: ${curr}`)
    return acc + curr
}, 0 ) // , 0 is the initial value of accumulator
console.log(myTotal);
