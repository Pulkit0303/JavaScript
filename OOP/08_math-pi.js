// To get to know about the object and its properties like: value, writable, etc.
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor)

//console.log(Math.PI)
//Math.PI = 5
//console.log(Math.PI)

const coffee = {
    name: "Coffee",
    price: 499,
    isAvailable: true,
    order : function(){
        console.log(`Ordered: ${this.name}`)
    }
}


Object.defineProperty(coffee,'price',{
    writable: false, // Can overwrite value
    enumerable: false, // Can iterate through
})
console.log(Object.getOwnPropertyDescriptor(coffee,"price"))

for (let [key,value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`)
    }
}