const User = {
    _email: "Pu@apple.in",
    _password: "03ABCD03",
    get email(){
        return this._email.toUpperCase()
    },
    set email(mail){
        this._email = mail
    }

}
console.log(User["email"])

const tea = Object.create(User) // To create a Object Instance
tea["_email"] = "tea@tea.com"
console.log(tea["email"]);