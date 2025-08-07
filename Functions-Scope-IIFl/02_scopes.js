let a = 500 // Globally defined variable

if (true){
    // Variables created inside {} are local variables (except var)
    let a = 5
    const b = 6
    var c = 7 
    //console.log("Locally defined: ",a);
}
//console.log(b) // Error because not global
console.log(c) // Will print because 'var' does not follow scope
console.log("Globally defined: ",a); // This will print because a is defined globally


//IN-SHORT: Child function can access Parent function variables, but Parent cannot access child function variable
function one(){
    const username = "Pulkit"
    function two(){
        const website = "google"
        console.log(username);
    }
    //console.log(website); // Error because parent is trying to use child variable
    two()
}
one()

if(true){
    const username = "Pulkit"
    if(username==="Pulkit"){
        const website = "Gmail"
    }
    //console.log(website)
}
//console.log(username); Error because username is defined locally inside 'if'

/* Additional Information - HOISTING */

// In this example we are able to call the function before its definition (It is not an expression)
console.log(addOne(5));
function addOne(num){
    return num + 1
}

//In this example we will get an error because we are calling the function before definition 
// Basically we are calling the variable before its definition
//console.log(addTwo(5)) // Error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))