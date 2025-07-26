let fname = "Lewis"
let lname = "Hamilton"

//console.log(fname+lname); Never concat string in this way

console.log(`7th Time World Champion is held by ${fname} ${lname}`); //Use this type of string concat 

let team = new String('Ferrari')

console.log(team[0])
console.log( team.__proto__ );
console.log(team.length)
console.log(team.toUpperCase());
console.log(team.charAt(2));
console.log(team.indexOf('i'));


const newTerm = team.substring(0,4);// We cannot use -ve value
console.log(newTerm);

const newSlice = team.slice(-7, 4); // We can use -ve value [To start from back]
console.log(newSlice);

//To convert a String to an array we use split("symbol you want as split condition")
let newString = "pulkit.19.2003.apple.in"
console.log(newString);
console.log(newString.split("."))

//To remove the whitespaces (" ") 
let noWhiteSpace = "  Pulkit  "
console.log(noWhiteSpace);
console.log(noWhiteSpace.trim()) // [trimEnd: removes whitespaces from end] ; [trimstart: removes whitespaces from start]

//To replace letters from one to another
let replaceString = "This is JavaSrcript Repository"
console.log(replaceString);
console.log(replaceString.replaceAll(" ", "-"));

//To know if the word/letter exists in the string
const nameMe = "My name is Lewis"
console.log(nameMe.includes("Lewis"));


