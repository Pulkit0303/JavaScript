// const numbers = [1,2,3,4,5]
// //For each cannot return any value even if you type return, it will return 'undefined'
// const numbs = numbers.forEach((nums)=>{
//     //console.log(nums)
//     return nums
// })
// console.log(numbs);

//Filter returns the values
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const required = numbers.filter((item) => item > 4);
console.log(required); // in this case it returns array

//Other Method
// const newNums = []
// numbers.forEach((nums) => {
//     if(nums > 4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

//Lets use real-world (Array of object based) example
const Drivers = [
  { name: "Lewis", team: "Mercedes", titles: 7 },
  { name: "Max", team: "RedBull Racing", titles: 4 },
  { name: "George", team: "Mercedes", titles: 0 },
  { name: "Fernando", team: "Aston Martin", titles: 1 },
  { name: "Stroll", team: "Aston Martin", titles: 0 },
];
let result = Drivers.filter((driver) => driver["titles"] > 1);
result = Drivers.filter((driver) => {
  return driver["team"] === "Mercedes";
});
result = Drivers.filter((driver) => {
  return driver["team"] === "Mercedes" && driver["titles"] > 1;
});
console.log(result);
