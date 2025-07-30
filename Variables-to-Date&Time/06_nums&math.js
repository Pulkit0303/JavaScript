const num1 = new Number(22);
console.log(num1);

const num2 = 345;
console.log(num2);

//To convert a number to a string
const num3 = 490
console.log(num3.toString())
console.log(`The length of nums:${num3.toString().length}`)

//To convert it into fixed decimal points like 100.00 | 100.000 (In String datatype)
const num4 = 1000
console.log(num4.toFixed(2));
console.log(num4.toFixed(3));

//To round of the the precise digits (In String datatype)
const precise = 78.9859
console.log(precise.toPrecision(2)); 
console.log(precise.toPrecision(5)); 

//To have it in US Standard or IN standard commas (In String datatype)
const cost = 1000000
console.log(cost.toLocaleString('en-US'));
console.log(cost.toLocaleString('en-IN'));


/***********Maths************/
console.log(Math.abs(-3)); // To convert Negative values to Positive values
console.log(Math.pow(2,10));// Power Operation

console.log(Math.round(9.6)); //To round of decimal number to number
console.log(Math.ceil(6.1)); //To get the ceiling value (Upper Bound Value)
console.log(Math.floor(6.9)); //To get the floor value (Lower Bound Value)

console.log(Math.min(3,4,8,2,1)) //To print the minimum value 
console.log(Math.max(3,4,8,2,1)) //To print maximum value

console.log(Math.random()) // To generate random number [Between: 0-1]
console.log(Math.round(Math.random()*5)+1) // To generate random number [Between 1 to 6] (Ideal for dice) 

//Formula for desired range random number [Very Impt]
const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1))+ min);