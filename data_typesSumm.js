//Types of Datatypes
//1. Primitive: String, Number, Null, Undefined, Boolean, BigInt, Symbol
let bank_balance = 23897873891899097672n
let name = "Pulkit"
let age = 22
let place;

//Symbol make an value unique even if given value is same
const id = Symbol('1234')
const newId = Symbol('1234')
console.log(id === newId);

//Finding the return type of the datatype
console.log(typeof age);


//2. Non-Primitive: Array, Functions, Objects  (Typeof: Array,Object => Object; function => function)
const drivers = ["Lewis", "Max", "George"]

//Defining an object
let myObj = {
    name: "Pulkit",
    age: 22
}
//Calling an object
let nameMe = myObj.name;
console.log(nameMe);

//Defining a function
const myFunction = function(){
    console.log("Hello");
}
//Calling a function
myFunction()

console.log();



