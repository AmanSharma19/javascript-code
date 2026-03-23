let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(typeof myDate)

let createDate = new Date(2023, 0, 23)
console.log(createDate.toDateString())

let newDate = new Date("2006-01-26")
console.log(newDate.toLocaleString())

let timeStamp = Date.now()
console.log(timeStamp)
console.log(createDate.getTime())
console.log(Math.floor(Date.now()/1000)) // in seconds

let NewDate = new Date()
console.log(NewDate.getFullYear())
console.log(NewDate.getDay())
console.log(NewDate.getHours())
console.log(NewDate.getMonth()) // and so on


newDate.toLocaleString('default', {
    weekday: "long"
})
 // important is locale string
