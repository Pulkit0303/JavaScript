class itemDetail{
    constructor(name){
        this.name = name
    }
    getProductName(){
        console.log(`Product Name: ${this.name}`)
    }
    static getProductCode(){ // So that not every object of instance of the class can access the method/property(props)
        return Math.ceil(Math.random()*10000)
    }
}
const iPhone = new itemDetail("iPhone 16 Pro")
iPhone.getProductName()
console.log(iPhone.getProductCode())
class item extends itemDetail{
    constructor(name,price){
        super(name)
        this.price = price
    }
    getPrice(){
        console.log(`Price: ${this.price}`)
    }
}
const samsungGalaxyS25 = new item("Samsung Galaxy S25",1099)
samsungGalaxyS25.getProductName()
console.log(samsungGalaxyS25.getProductCode())
console.log(samsungGalaxyS25.getPrice())