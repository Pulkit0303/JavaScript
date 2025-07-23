const accountId = 3030
let accountName = "Pulkit"
var accountCity = "Pune"
accountGender = "Female"

//If no value is define in a variable
// JS shows 'Undefined'
let accountPassword

//accountId = 1903 
//This is not allowed in JS. Value of const cannot be changed

accountCity = "Hyderabad"
accountGender = "Male"

//Single Line print
console.log(accountId);

//Print in a tabular form
console.table([accountId, accountName,accountCity,accountGender,accountPassword])

/*
Never ever in your life use VAR for storing variable.
Because of its block scope and functional scope problem/issues.
*/