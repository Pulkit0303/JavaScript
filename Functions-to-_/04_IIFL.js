// Immediately Invoked Function Expressions

//IMPT DON'T FORGET TO END THE LINE WITH ';' otherwise other functions won't be executed
// first '()' is function definition and second '()' is function call

//This is a NAMED IIFE
(function coffee(){
    console.log("DB Connected!")
})();

//Calling an arrow function using IIFL without '{}'

//Next two are example of UN-NAMED IIFE
(() =>(console.log("DB2 Connected!")))();

//Calling an arrow function using IIFL with '{}' and parameters
( (name) => {
    console.log("DB3 Connected containing ",name)
} )("Admin Info");