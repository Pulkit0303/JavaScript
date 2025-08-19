// Class Syntax
class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptionPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const coffee = new User("coffee","coffee@gmail.com","coffee123")
console.log(coffee.encryptionPassword())
console.log(coffee.changeUsername())

// Behind the scene

function UserOne(username,email,password){
    this.username = username
    this.email =email
    this.password = password
}
UserOne.prototype.encryptionPassword= function(){
    return `${this.password}abc`
}
UserOne.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}
const tea = new UserOne("tea","tea@apple.in","tea12345")
console.log(tea.encryptionPassword())
console.log(tea.changeUsername())
