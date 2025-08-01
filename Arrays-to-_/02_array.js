const merc = ["Kimi","Russell","Toto"]
const ferrari = ["Lewis","Charcles","Fed"]
const mclaren = ["Oscar", "Norris", "Zak"]

//merc.push(ferrari) // Array can insert another array into it
console.log(`The length of Merc Array: ${merc.length}`)

const full = merc.concat(ferrari); // To concat another array elements 
console.log(full)
console.log(`The length of Full Array: ${full.length}`)

//Most of the time we will be usin this to concat elements to an array
const new_full = [...ferrari,...merc,...mclaren]
console.log(new_full);
console.log(`lenght: ${new_full.length}`);

//To make one array from multi-dimensional array
const multiArr = [1,2,3,[4,5],[6,[7,8]]]
console.log(multiArr.flat(Infinity))

console.log(Array.isArray([1,2,3])); //To check if the value is array or not 

console.log(Array.from("Lewis"));// To create a array from the element

const p1 = "Lewis"
const p2 = "Max"
const p3 = "Oscar"
console.log(Array.of(p1,p2,p3))// To create array of elements provided


