// // This is how you create a function
// function sayMyName(){
//     // Here you give definition to the function
//     console.log("L")
//     console.log("E")
//     console.log("W")
//     console.log("I")
//     console.log("S")
//     console.log("----")
// }
// sayMyName() // This is how you call a function


// // Function with Parameters
// function additionOf(number1, number2){
//     console.log(Number(number1)+Number(number2))
// }
// additionOf(4,3) // Function call with arguments


// // The output is undefined because the value is not stored in the Result1 variable, since function is not returning any value
// const result1 = additionOf(4,5)
// console.log("Result:",result1);


// //When you your function to return a value rather than just printing value
// function subtractionOf(number1,number2){
//     return Number(number1) - Number(number2)
//     //Lines after return never get executed!
// }
// const result = subtractionOf(5,4)
// console.log("Result:",result);


// //Examples:
// function loggedIn(username){
//     return `${String(username)} logged in!`
// }
// loggedIn("Pulkit") // This will not give you any output, because the vaule is returned but not stored or printed
// // console.log(loggedIn("Pulkit")) // Printing the returned value



// // Function using conditional to assess the undefined value
// function isLoggedIn(user = "Admin"){            // This is how we can give default value , if there is no input

//     //if(user === undefined || user===null){
    
//     if(!user){                                 // Both the line mean the same but this is used more in industry
//         console.log("Wrong Input!")
//         return 
//     }
//     return `${user} logged in!`
// }
// //On giving no value the function returns a undefined value
// //console.log(isLoggedIn())


// //Multiple and dynamic values input
// // When the user keeps on adding value(not defined value) we use rest operator
function shoppingCartValues(...cash){
    return cash
}
console.log(shoppingCartValues(100,200,300,500,800)) // It will return an array of values


//When providing values before rest operator(...) the first n values are stored in n provided parameters and rest in rest operator parameter
function shoppingCartValues2(cash1,cash2,...cash){
    return cash
}

// It returned the last 3 values because first 2 are stored in cash1 and cash2
console.log(shoppingCartValues2(100,200,300,500,800)) 


//Passing object as an parameter to a function
const obj = {
    name: "Pulkit",
    amount: 2500
}

function cartMessage(objinput){
    console.log(`${objinput.name} to receive Rs${objinput.amount}/-`)
}
cartMessage(obj);

//We can pass object in the arguments
cartMessage({
    name: "Lewis",
    amount: 3000
})

//Passing array as function parameter
const myArray = [10,20,30]
function getSecondElement(arrayInput){
    return arrayInput[1]
}
console.log(getSecondElement(myArray))
//We can pass an instant 
console.log(getSecondElement([5,6,7,8]))