let todayDate = new Date()
//console.log(todayDate)
console.log(typeof todayDate);

console.log(todayDate.toString()) // To print in string datatype
console.log(todayDate.toDateString()) // To print in simple form (String datatype)

console.log(todayDate.toTimeString()) // To print current time in String
console.log(todayDate.toLocaleString()) // To print current date and time in String

console.log(todayDate.toLocaleDateString('en-US')) // To print date in US Format

console.log(todayDate.toISOString())

const toknowDate = new Date(2023,2,19) // To get to speific date
console.log(toknowDate.toDateString())

const toknowdateandtime = new Date(2023, 2, 19, 5,14,45) // To get specific date and time
console.log(toknowdateandtime.toLocaleString());

const generalform = new Date("2024-03-19 00:00:00");
console.log(generalform.toLocaleString())

console.log(Date.now())
const date1 = new Date("2003-03-19 05:15:30")
console.log(date1.toDateString());
// console.log(date1.getDay()); // To get the day of the week (0-6, where 0 is Sunday)
// console.log(date1.getMonth()+1); // To get the month (0-11, where 0 is January)
// console.log(date1.getFullYear()); // To get the full year