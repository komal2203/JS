class User {
    constructor(email, password) {
        this.email = email
        this.password = password///this wont work as we overwrite password input by defining getter and setter function for password
    }

    get email() {
        return `${this.e_email.toUpperCase()}`
    }
    set email(value) {
        this.e_email = value
    }
    get password() {
        // return this._password.toUpperCase()
        return `${this._password}komal`
    }
    set password(value) {
        this._password = value
    }
}

const komal = new User("komal@gmail.com", "komal1#23321")
console.log(komal)
console.log(komal.password)
console.log(komal.email)
