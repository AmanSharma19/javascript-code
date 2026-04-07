const obj = {
    js: "javascript",
    rb: "ruby"
}

// for i loop

for(const key in obj){
    console.log(`${key} -> ${obj[key]}`)
}

// for in loop in array gives us indexes 
const arr = [1,2,3,4,5]
for(const a in arr){
    console.log(a)
}

// map is not iteratable
