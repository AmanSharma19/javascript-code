
if(true){
    let a = 10
    const b = 20
    var c = 30 // whether it is delclared in the scope it is accessable globally so we avoid using var in js because it can cause bugs in the code
}
// console.log(a);
// console.log(b);
console.log(c);

// let and const are block scoped but var is function scoped
// global scope -> function scope -> block scope
// in block scope we can access the variable declared in global scope but in global scope we can't access the variable declared in block scope
// in function scope we can access the variable declared in global scope but in global scope we can't access the variable declared in function scope

let aman = 202
if(true){
    let aman = 100
    console.log("Inner: ",aman) // it will print 100 because of block scope of let and const but if we use var it will print 100 because of function scope of var
}
console.log(aman) // it will print 202 because of block scope of let and const but if we use var it will print 100 because of function scope of var

// expression -> when we assign a value to a variable it is called expression
val(5) // it will give an error because of hoisting but if we declare the function before calling it then it will work fine 
const val = function(num){
    return num * num
}

// hoisting -> when we can access the variable or function before declaring it is called hoisting
// in js we can access the variable declared with var before declaring it but it will be undefined because of hoisting but we can't access the variable declared with let and const before declaring it because of temporal dead zone
// in js we can access the function declared with function before declaring it because of hoisting but we can't access the function declared with function expression before declaring it because of hoisting
