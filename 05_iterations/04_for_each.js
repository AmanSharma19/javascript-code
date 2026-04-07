const arr = ["js", "cpp", "c", "python"]
arr.forEach(function (item) {
    console.log(item);
    
}) // callback function don't have any name

arr.forEach((name) => {
    console.log(name)
})

arr.forEach((item, index, ar) => {
    console.log(item, index, ar)
})

const myArr = [
    {
        name : "Aman",
        roll: 23
    },
    {
        name : "aman",
        roll: 22
    },
    {
        name : "AMAN",
        roll: 21
    }
]

myArr.forEach((item) => {
    console.log(item.name);  
})