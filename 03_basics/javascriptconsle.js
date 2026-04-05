// javascript cde --> browser --> browser execution coefficient -> this
// executes in side a thread. Everthing in js execute in a single thread i.e. js is single threaded
// global execution context
// function executin context
// eval execution context

const { captureOwnerStack } = require("react")

let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10,2)

/*
code ko creation phase ya fir memory creation phase bolte h
two phase : 
1. memory creation phase 
2. execution phase 

steps: 
1. globel execution -> this
2. memory phase
 --> val1 -> undefined
 --> val2-> undefined
 --> addnum = definaiton
 --> result1= undefined
 --> result2 = undefined

2. Execution phase
--> val1 = 10
--> val2 = 5
--> addnum = a new sandbox[new variable envirinment + execution thread]
now new memory phase and execution phase for addnew function
MEMORY PHASE FOR ADDNUM
num1 = undefined
num2 = undefined
total = undefined

EXECUTUTION PHASE FOR ADDNUM
num1 = 10
num2 = 5
total = 15
*** now work of this is done it will be deleted

at last {NVE + thread}
*/
/*
CALL STACK
step 1 -> global execution
as function come inside the stack it will be poped after its execution



*/
