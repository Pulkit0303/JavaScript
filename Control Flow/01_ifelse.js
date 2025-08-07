// It will always get executed because the condition is true
if(true){
    console.log("True!");
}


// This will never get executed because the condition is false
if(false){
    console.log(`False`)
}

if(2 === "2"){
    console.log( "Is equal")
}
//Operators used in conditonal expressions
//  <, >, <=, >=, ==, !=, ===, !==


const temperature = 45
if (temperature < 50){
    console.log(`Temperature is less than 50`);
}
console.log("Todays temperature is ",temperature,"degree celsius"); //This statement will always get printed since, out of conditional block


const isLoggedIn = true
const hasDebitCard = true
const usingGoogleLogin = false
const usingEmailLogin = true

// It will execute only if all the conditions are true
if (isLoggedIn && hasDebitCard){
    console.log("Paayment can be done")
}

// It will execute even if one condition is true
if (usingEmailLogin || usingGoogleLogin){
    console.log("User LoggedIn!")
}

// Use of if, else if and else
const pocket = 1000
if(pocket < 500){
    console.log("Money less than 500");
    
}   else if(pocket < 750){
    console.log("Money is less than 750");
    
} else if(pocket < 900){
    console.log("Money is less than 900");
    
} else{
    console.log("Money is more than or equal to 1000 ");
    
}

//Ternary Operator
// condition ? true: false

const age = 20
age > 18 ? console.log("Allowed!") : console.log("Not Allowed!")
