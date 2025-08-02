// Singleton Object Creation
//const tinderUser = new Object

//Non-Singleton Object Creation
const tinderUser = {}
tinderUser["id"] = "123abc"
tinderUser["name"] = "Sam"
tinderUser["isLoggedIn"] = false

//Accessing Multi-dimensional objects
const User = {
    email: "email@gmail.com",
    fullname : {
        userfullname :{
            firstname: "Lewis",
            lastname: "Hamilton"
        }
    }
}
// console.log(User);
// console.log(User.fullname.userfullname.firstname); // To acces element from multi-dimensional object

//To join two objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//Object.assign(target,source1,source2,etc.)
//const combined = Object.assign({},obj1,obj2) 
// The reason we are providing an {<emptyObject>} so that values of obj1 does not get affected.

const combined = {...obj1,...obj2} // This type of combining will be used most of the time
// console.log(combined)
// console.log(obj1)

// When we get data from a database it is in the form of Object inside an array
const dbmessage = [{
    name: "Pulkit",
    age: 22
},{
    name: "Aryan",
    age: 23
},{
    name: "Raj",
    age: 23
}]
//console.log(dbmessage[1].name) // This is how we can access elements from the Object in an array

//console.log(tinderUser);
// console.log(Object.keys(tinderUser));// To get the keys in an Object
// console.log(Object.values(tinderUser)); // To get the values of an Object
// console.log(Object.entries(tinderUser)); // To get entries in an object (Content inside an object)

// console.log(tinderUser.hasOwnProperty(["name"])) // To check whether the Object has an field of <name>
// console.log(tinderUser.hasOwnProperty(["address"])) // Returns a boolean value

/*********Object De-Structure************/
const course = {
    coursename: "JS Tutorial",
    courseInst: "Hitesh"
}
const {courseInst} = course // We are creating a new variable for a part of an Object
console.log(courseInst);

const {coursename: cosname} = course // We can substitute another name for the new variable
console.log(cosname);

/* Example of an JSON Format response from API
{
    "name": "ABC",
    "age": 22,
    "ismale": true
}
*/