class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    // We are using different name so that there is no Maximum Call Stack error because constructor is also trying to get value and set also

    // set - What value will be set in variable
    // get - What value will be returned
    get password(){
        return this._password.toUpperCase() 
    }
    set password(value){
        return this._password = value.toUpperCase() 
    }

    get email(){
        return `Email${this._email}`
    }
    set email(mail){
        return this._email = mail.toLowerCase()
    }
}
const pulkit = new User("pulkit@apple.in","ABCD")
console.log(pulkit.password)
console.log(pulkit.email)
