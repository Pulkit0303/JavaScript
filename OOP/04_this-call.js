function setUsername(username){
    this.username = username
    console.log("called")
}

function createUsername(username, email, phone){
    //setUsername(username) // This function is called but the variable is lost because EC removes the variable when deleted
    //setUsername.call(username) //Same as previous variable is lost since EC removes the function after being called
    setUsername.call(this,username) // We are telling the function to store the value in this.username of createUsername instead so that the value isn't lost 
    this.email = email
    this.phone = phone
}

const userOne = new createUsername("Pulkit","pulkit@apple.in",9245173)
console.log(userOne);
