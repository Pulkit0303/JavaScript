const userEmails = []
if(userEmails){
    console.log("Got user email")
} else  {
    console.log("Don't have user email");
}

//falsy values
// 0 , -0, false, 0n(BigInt), ""(Empty String), null, undefined, NaN(Not a Number)

//truthly values
// "0", `false`, " " (Non-Empty String), [] (Empty Array), {} (Empty Array),

//  Correct way to check condition on array
if(userEmails.length === 0){
    console.log("Don't have user emails");
} else {
    console.log("Got user emails")
}

//  Correct way to check condition on objects
const MyObj = {}
if(Object.keys(MyObj).length === 0){
    console.log("Don't have any objects");
} else {
    console.log("Have objects");
}

//Nullish Coalescing Operator (??) used for null and undefined value

let val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10 // If there is a null value then the variable will store the value after '??'
console.log(val1);

val1 = undefined ?? "Hello" // If there is a undefined value then the variable will store the value after '??'
console.log(val1);
