// Everything is an object, function is a function and also an object

// function multiplyBy10(num){
//     return num * 10
// }
// multiplyBy10.two = 20
// console.log(multiplyBy10(5));
// console.log(multiplyBy10.two)
// console.log(multiplyBy10.prototype);


function driverDetail(name,number){
    this.name = name
    this.number = number
}

driverDetail.prototype.printNumber= function(){
    console.log(`Driver Number: ${this.number}`)
}

driverDetail.prototype.printName= function(){
    console.log(`Driver Name: ${this.name}`)
}

//const Driverone = driverDetail("Lewis",44)// This show an error because the object doesn't know that it has got additional properties
const Driverone = new driverDetail("Lewis",44)
const Drivertwo = new driverDetail("Oscar",81)
Driverone.printNumber()
Drivertwo.printName()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/