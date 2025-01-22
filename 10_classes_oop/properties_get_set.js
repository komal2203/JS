function User(email, password) {
    this._email = email
    this.password = password

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this.email = value
        }
    })
}

const chai = new User("chai@chai.com", "123chai")
console.log(chai.email)
console.log(chai.password)