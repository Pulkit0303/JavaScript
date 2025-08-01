//Singleton
//Object.create

//Literals

const mykey = Symbol("key1")

const aboutMe = {
    name: "Pulkit",
    age: 22,
    [mykey]: "MyKey", // To include a Symbol datatype we use [<Symbol-Variable>] type of 
    email: "pulkit.19.2003@gmail.com",
    isLoggedIn: true
}
//console.log(aboutMe["name"]);

//To freeze the element from being changed
// Object.freeze(aboutMe["name"])
// aboutMe["name"] = "Lewis"
// console.log(aboutMe)

//To include a function inside an object
aboutMe.greetings = function(){
    console.log("Hello! I'm Pulkit")
}
console.log(aboutMe.greetings());

// We use 'this' to get the value of the particular object (Further more explaination)
aboutMe.greetingstwo = function(){
    console.log(`Hii! This side ${this.name}`)
}
console.log(aboutMe.greetingstwo());
