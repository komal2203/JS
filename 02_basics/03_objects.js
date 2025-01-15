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
    [mySym]: "mykey1",//square brackets are to be used for symbols 
    //or it will be read as a normal key
    age: 21,
    location: "delhi",
    email: "komal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// //behind the scenes these keys are stores as strings
// console.log(JsUser["name"])//to access the value of key = email
// console.log(JsUser["full name"])//this cant be accessed using dot method as below

// console.log(JsUser.email)//a way of accessing objects
// console.log(JsUser[mySym])//printing a symbol

// JsUser.email = "komalmeena@gmail.com"
// console.log(JsUser["email"])//overwriting value of email




// Object.freeze(JsUser)///no more changes can be done to this object now
// JsUser.email = "komalkomal@gmail.com"
// console.log(JsUser["email"])//email didn't get updated because jsuser was frpzen
// console.log(JsUser)



JsUser.greeting = function(){
    console.log("Hello everyone!")
}

// console.log(JsUser.greeting)///prints function[anonymous]
// console.log(JsUser.greeting())//gives output of function

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)//this -> is used when we want to referance the same object 
    //it will help us to access the properties of the current object 
}

JsUser.greetingTwo();//gives output of function

console.log(JsUser.greetingTwo())//gives output of function and also prints undefined