//for-of loop is used to iterate an array
const f1Teams = ["Mercedes", "Ferrari","RedBull Racing","McLaren"]
for (const team of f1Teams) {
    console.log(team)
}

const numbers = [1,2,3]
for (const nums of numbers) {
    console.log(nums)
}

const myMap = new Map()
myMap.set("IN","India")
myMap.set("RS","Russia")
myMap.set("AU","Australia")

console.log(myMap)

// To iterate elements of a map
for (const [short,full] of myMap) {
    console.log(short,full)
}

const MyObj = {
    game1 : "F1 25",
    game2 : "FIFA 25"
}

// We cannot iterate elements of an Object
// for (const [game,name] of MyObj) {
//     console.log(game,name)
// }