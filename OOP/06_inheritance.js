class User{
    constructor(username){
        this.username = username
    }
    logIn(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username) //Uses the parent methods 
        this.password = password
        this.email = email
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const mathTeacher = new Teacher("Math","Math@gmail.com","Math123")
mathTeacher.logIn()
mathTeacher.addCourse()

const englishTeacher = new User("EnglishTeacher")
englishTeacher.logIn()
//englishTeacher.addCourse()    // This will give error because User cannot use Teacher methods

console.log(mathTeacher instanceof Teacher);
console.log(mathTeacher instanceof User);