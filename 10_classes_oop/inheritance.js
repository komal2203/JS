class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)//calls the constructor of the super class
        this.email = email
        this.password = password
    }

    addCourses() {
        console.log(`new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "chai#21")
chai.addCourses()
chai.logMe()


const masalaChai = new User("masalaTea")
masalaChai.logMe()
// masalaChai.addCourses() not correct 

console.log(chai === masalaChai)//false
console.log(chai == masalaChai)//false

console.log(chai instanceof Teacher)//true
console.log(masalaChai instanceof Teacher)//false