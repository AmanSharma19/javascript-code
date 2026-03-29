// singleton objects

const user = new Object() // constructor
user.id = "123abc"
user.name = "sammy"
user.isLoggedIn = false

const regularUser = {
    email: "Samme@gmail.com",
    fullName: {
        userfullname: {
            firstName: "aman",
            lastName: "Sharma"
        }
    }
}

console.log(regularUser.fullName?.userfullname.firstName) // ? is used for check if we got any value or not 
// if got any value then only it will move further

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

// three types of copying 
const obj3 = {obj1, obj2} // object inside object
console.log(obj3)

// copy only the elements of objects inside on other object
const obj4 = Object.assign({}, obj1, obj2) // {} is not necessary but is a good practice
console.log(obj4)


const obj5 = {...obj1, ...obj2} // spread to copy 
console.log(obj5)

console.log(Object.keys(user)) // returns keys of object inside an array
console.log(Object.values(user)) // return values of object inside an array

console.log(Object.entries(user)) // each key value pair in array

console.log(user.hasOwnProperty("email")) // boolean result

// console.log(user)

// destructuring of Objects
const course = {
    courseName: "Javascript",
    price: "999",
    courseStudent: "Aman"
}

// course.courseStudent direct Access

const {courseStudent : instructor} = course // courseInstructor: Instructor is alias means from now courseInstructor can be accessed as instructor
console.log(instructor)


// JSON -> object without name -> indise this all the keys are also declared as string inside ""
// {
//     "name": "Aman",
//     "course": "Java Script",
//     "price": "Free"
// } {} -> [] in array format
 // JSON formator to study the JSON object or array format

// Api -> application programming interface 1. array format 2. Object format
// Api is just like ki merko kuch kam nhi karna, vo kam api mere liye automatic kre

