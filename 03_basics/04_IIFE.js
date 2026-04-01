// Immediately invoked function Expression -> IIFE
// syntax for IIFE -> ()();
// first parenthesis () -> for function defination
// second parenthesis () -> for execution call
// no need to call it explicitly

// many times there is a problem created on function due to global scope pollution so we use IIFE
// this is the function which executes immediately

(function chai(){
    // named iife
    console.log("IIFE done")
})();

((name) => {
    console.log(`NEW connected ${name}`)
})("AMAN"); // to pass argument add in this ()



