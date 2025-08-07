// const user = {
//     name: "Pulkit",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.name} welcome to the website!`) // Prints the current username value in the object    
//         console.log(this) // Prints the current context
//     }
// }
// user.welcomeMessage()

// console.log(this); // Gives the context of the global 

// function chai(){
//     let username = "Pulkit"
//     console.log(this.username)
//     //console.log(this) // Gives the context of the function
// }
// chai() 

// const coffee  = () => {
//     let flavour = "Hazelnut"
//     console.log(this.flavour);
// }
// coffee()

//Array Function example and when using '{}' we need to use return keyword for returning the value
const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(9,1));

// When not using '{}' in arrow function you need not to use return keyword
const addOne = (num3) => (num3 + 1)
console.log(addOne(6));

//const addOneObject = (num3) => {name: "Pulkit"} // This will return undefined when trying to return object
const addOneObject = (num3) => ({name: "Pulkit"}) // This is the correct way to return an object
console.log(addOneObject(6));
