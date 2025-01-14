//constructors and literals are two ways of declaring objects

//singleton
///singleton is formed when we use constructors 
//creates only one object of a type
// Object.create // constructor method of creating an object


//object literals
//singleton is not formed when we use literals
//creates multiple instances of object

//example of using symbol in object
const mySym = Symbol("key1")

const JsUser = {
    name: "komal",
    "full name":"komal meena",//also correct
    [mySym]: "mykey1",
    age: 21,
    location: "delhi",
    email: "komal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

//behind the scenes these keys are stores as strings
console.log(JsUser["name"])//to access the value of key = email
console.log(JsUser["full name"])//this cant be accessed using dot method as below

console.log(JsUser.email)//a way of accessing objects
