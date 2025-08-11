const numbers = [1, 2, 3, 4];
let newNums = numbers.reduce((acc, currVal) => {
  //console.log(`Acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);
//console.log(newNums);

newNums = numbers.reduce((acc, currVal) => acc + currVal, 0);
console.log(newNums);

const shoppingCart = [
  { item: "Jersey", 
    price: 4999 },
  { item: "Shoes",
     price: 3999 },
  { item: "Cap",
    price: 1999
   },
  {item: "Shorts",
    price: 2499
   }
];
const finalPrice = shoppingCart.reduce((acc,item) => (item["price"]+acc),0)
console.log(finalPrice);
