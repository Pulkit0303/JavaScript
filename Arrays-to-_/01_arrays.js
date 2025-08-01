const myarr = [1,3,5,6,2]

console.log(myarr.length); // To get the length of array

console.log(myarr.includes(4)); // To check if it contains the element

console.log(myarr.indexOf(3)); // To get the index value of an element

console.log(myarr[3]) // To print the element at that index

myarr.push(9) // To insert new element to the end of the array

console.log(myarr); // To print the whole array

myarr.pop() // To remove the last element from the array
console.log(myarr);

myarr.shift() // To remove first element from the array
console.log(myarr)

//Very Very Impt
//Slice does not change the original array or remove elements from the given range
//Splice removes the elements from the array from the given range
console.log(`Original Array: ${myarr}`)

const newArr = myarr.slice(1,3)
console.log(newArr);
console.log(`After Slice Operation: ${myarr}`);

const newArr2 = myarr.splice(1,3)
console.log(newArr2);
console.log(`After Splice Operation: ${myarr}`);



