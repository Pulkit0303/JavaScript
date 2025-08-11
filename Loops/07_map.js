const numbers = [1,2,3,4,5,6,7,8,9,10]
//const result = numbers.map((num) => (num + 10))
const result = numbers
    .map((num) => {return num * 10})
    .map((num) => (num + 1))
    .filter((num) => num >= 40) // This is called Chaining (Using multiple functions at a time)
console.log(result);
