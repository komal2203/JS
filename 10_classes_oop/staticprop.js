class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static createId() {//static doesnt give access of this function to every instance of user class

        return `123`
    }
}
const komal = new User("komal")
// console.log(komal.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone)
iphone.logMe()

// console.log(iphone.createId())//wont give output as createId is a static function