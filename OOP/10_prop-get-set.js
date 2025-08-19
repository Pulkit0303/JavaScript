function user(email,password){
    this._email = email
    this._password = password
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toLowerCase()
        },
        set: function(pass){
            this._password = pass
        }
    })
}
const one = new user("pulkit@apple.in","ABC12DF")
console.log(one["password"])