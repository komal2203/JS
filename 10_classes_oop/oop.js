// const user = {
//     username: "komal",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         // console.log(`user details are as follows`)
//         console.log(`username: ${this.username}`)
//         console.log(this)//prints the current context
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) //  prints {}


// const user2 = {
//     username: "shubham",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         // console.log(`user details are as follows`)
//         console.log(`username: ${this.username}`)
//         console.log(this)//prints the current context
//     }
// }


// //basicallly new keyword is a constructor function
// const promiseOne = new Promise()
// const date = new Date()

function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this ///it implicitly returns these values
}

// const userOne = user("komal", 4, true)
// const userTwo = user('shubham', 8, true)//this overwrites the value set by userone
// console.log(userOne)



//when new keyword is used first of all ,an empty object is created which is called new instance
//a constructor function is called due to the new keyword
//all of the (this) values are put into that object
//the fincal object is obtained

const userOne = new user("komal", 4, true)
const userTwo = new user('shubham', 8, true)
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)