
 /* Impt Note: Everything is an Object in JS
    Array --------> -|
    Function ----->  | ---> Object --> null
    String ------>  -| 
 */

let myName = "Pulkit   "

let myHeros = ["thor", "hulk"];
let heroPower = {
  thor: "Hammer",
  hulk: "Strength",
  getThorPower: function () {
    console.log(`Thor has his superpower of ${this.thor}`);
  },
};

heroPower.getThorPower(); // We are getting this because we defined in the object
//heroPower.getPulkit() // This will fail because no function

Object.prototype.getPulkit = function () {
  console.log("Pulkit has got superpower of brain.");
};

heroPower.getPulkit(); //Object is able to access the prototype function
// myHeros.getPulkit() // Array is able to access the prototype function

Array.prototype.heyPulkit= function(){
    console.log("Hey this is Pulkit")
}
myHeros.heyPulkit() // This will work because defined in Array type 
//heroPower.heyPulkit() // This will not work because not defined in Object type and can also not inherit from Array 

// Basically Object cannot inherit prototypes from Array, function, String, etc. But these can inherit prototype from Object

String.prototype.trueLength=function(){
    console.log(`${this.trim()}`)
    console.log(`True length: ${this.trim().length}`)
}

console.log(`Length: ${myName.length}`)
myName.trueLength()
"Lewis".trueLength()
"  Oscar  ".trueLength()
