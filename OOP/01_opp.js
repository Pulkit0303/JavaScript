const user = {
    username: "pulkit",
    loginCount: 5,
    signedIn: true,
    getUserDetail : function(){
        //console.log("Got User Detail!")
        //console.log(`Got ${this.username}`)
        //console.log(this)
    }
}
//console.log(user["username"])
//console.log(user.getUserDetail())

function User(username, loginCount, isLoggedIn){
    this.username = username //(this.username is variable and username is parameter)
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username} !`)
    }
    return this
}
//const userOne = User("Pulkit",5,true)
//const userTwo = User("Lewis",11,false)
//console.log(userOne) // We are getting the value of userTwo because it has overwritten it

const userOne = new User("Pulkit",5,true)
const userTwo = new User("Lewis",11,false)
//console.log(userOne) // Now we are not getting overwritten copy because we created new object(instance) of the function
//console.log(userTwo)
console.log(userOne.constructor)