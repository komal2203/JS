//ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }


//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const coffee = new User("komal", "komal@gmail.com", "koma123")
// console.log(coffee)
// console.log(coffee.encryptPassword());
// console.log(coffee.changeUsername());


// /behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changePassword = function () {
    return `${this.username.toUpperCase()}`
}

const chai = new User("tea", "tea@gmail.com", "chai@1234chai")
console.log(chai.encryptPassword())
console.log(chai.changePassword())