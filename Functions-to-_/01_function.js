// This is how you create a function
function sayMyName(){
    // Here you give definition to the function
    console.log("L")
    console.log("E")
    console.log("W")
    console.log("I")
    console.log("S")
    console.log("----")
}
sayMyName() // This is how you call a function


// Function with Parameters
function additionOf(number1, number2){
    console.log(Number(number1)+Number(number2))
}
additionOf(4,3) // Function call with arguments


// The output is undefined because the value is not stored in the Result1 variable, since function is not returning any value
const result1 = additionOf(4,5)
console.log("Result:",result1);


//When you your function to return a value rather than just printing value
function subtractionOf(number1,number2){
    return Number(number1) - Number(number2)
    //Lines after return never get executed!
}
const result = subtractionOf(5,4)
console.log("Result:",result);


//Examples:
function loggedIn(username){
    return `${String(username)} logged in!`
}
loggedIn("Pulkit") // This will not give you any output, because the vaule is returned but not stored or printed
console.log(loggedIn("Pulkit")) // Printing the returned value



// Function using conditional to assess the undefined value
function isLoggedIn(user = "Admin"){            // This is how we can give default value , if there is no input

    //if(user === undefined || user===null){
    
    if(!user){                                 // Both the line mean the same but this is used more in industry
        console.log("Wrong Input!")
        return 
    }
    return `${user} logged in!`
}
//On giving no value the function returns a undefined value
console.log(isLoggedIn())
