let n = undefined
//console.log(typeof(n));

let conv_n = Number(n);
//console.log(typeof(conv_n));
//console.log(conv_n);

// "33" => 33
// "33abs" => NaN (Not a number)
// "String" => NaN 
// null => 0
// undefined => NaN
// true => 1 ; false => 0


let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn);

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
