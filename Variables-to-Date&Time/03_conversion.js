let n = undefined
console.log(typeof(n));

let conv_n = Number(n);
console.log(typeof(conv_n));
console.log(conv_n);

// "33" => 33
// "33abs" => NaN (Not a number)
// "String" => NaN 
// null => 0
// undefined => NaN
// true => 1 ; false => 0


let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 0 => false
// null => false
// undefined => false
// 1 to infinite => true
// "" => false
// "Filled" => true


let someNumber = true;
let stringNumber = String(someNumber);
console.log(typeof(stringNumber));
console.log(stringNumber);

// 33 => "33"
// null => "null"
// undefined => "undefined"
// true => "true" ; false => "false"


// ************************Operations*************************
let valueNum = 9
let negValue = -valueNum
console.log(negValue);


console.log(2+3)
console.log(2-3)
console.log(2*3);
console.log(2**3);
console.log(3%2);

console.log("1" +2);
console.log("2"+2+8);
console.log(1+1+"3");


// console.log(2+3*4/4); NEVER WRITE THIS TYPE OF OPERATIONS
//console.log((2+3) * (4/4)); // ALWAYS Use () for seperation of operations

console.log(+true);

//Since the value of True is 1
console.log(true+9);

//Preffix and Postfix Increment
let n1 = 0;
console.log(n1++); // The value is first printed then Incremented.
console.log(++n1);  // The value is first incremented and then printed.
console.log(n1); // The updated value is printed.











