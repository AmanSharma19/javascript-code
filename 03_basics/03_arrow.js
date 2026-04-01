const user = {
    username: 'john_doe',
    greet: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this talks about the current context
        
    }

}
// user.greet()
// user.username = "Aman"
// user.greet()
console.log(this)
// const chai = function() {
//     username: "Aman",
//     console.log(this.username);
// }
// chai()

// arrow function
const chai = () => {
    let username = "Aman"
    console.log(`${this.username}`);
}
chai()

// pure arrow function
// () => {} // basic syntax, we can store it in a variable and give parameters to it
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,5))
// explicit return -> use return statement
// {} k sath return keyword ata h,, () k sath no need of return statement
// implicit return arrow function no need of paranthesis just use return statement directly // no need to write return here 
const addone = (num1, num2) => (num1 + num2); // implicit return -> no need of return statement
console.log(addone(3,5))

// returning object
const retonj = () => ({username: "Aman"})
console.log(retonj())
 