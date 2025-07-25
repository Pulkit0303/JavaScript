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

console.log(typeof myFunction);

//******************Memory Types*******************
//1. Stack(Primitive)  : (Giving photocopy of something)

let myvalue = "pulkit.com"
let anothervalue = myvalue
anothervalue = "pulkit.in"

console.log(myvalue);
console.log(anothervalue);

// 2. Heap(Non-Prmitive) : (Giving original photo)

let driver = {
    name: "Lewis",
    team: "Mercedes AMG Petronas"
}

let driver2 = driver
driver2.name = "Russell"

/*When you copy an object in JavaScript:
You’re not making a new object.
You’re just giving a new name (variable) to the same object in memory.
Both driver and driver2 are just labels for the same object. So when driver2 changes it, driver also sees the change.
*/
console.log(driver.name);
console.log(driver2.name);

