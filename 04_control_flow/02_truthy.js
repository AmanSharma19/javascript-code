// truthy value -> when we assume that ahat we are giving to the if condition in true
// and don't use any operator

const name = "Aman"
if(name){ // passing the name without any operator
    console.log("name found");
}else{
    console.log("name not found");
}

// "" --> empty is consitered false;

// all the values assumed to be false are
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// except these all are truthy values

// truthy values
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null and undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 15
// to solve ambiguity like if there are multiple values are coming in the variable it will assign one of them to it 
// read more about it !!!!!!!


