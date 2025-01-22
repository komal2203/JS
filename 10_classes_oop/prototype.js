// let myName = "komal   "
// let myChannel = "coffee   "
// console.log(myName.trim().length)
// whitespace characters are characters used to represent spaces, tabs, line breaks, and other invisible spacing.

///will try to make a function ->  truelength()
let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is : ${this.spiderman}`)
    }
}

heroPower.getSpiderPower()


Object.prototype.komal = function () {
    console.log(`komal is present in all objects`)
}

heroPower.komal()
myHero.komal()//array is also an object
//basically string,array ,function are all also an object



Array.prototype.heyKomal = function () {
    console.log(`array contains hey komal function`)
}

myHero.heyKomal()
// heroPower.heyKomal()///heykomal() protoypr is only added to array 


// /inheritance
// -> prototypal Inheritance

const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__protot__ = User



//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//Teaching support gains properties of Teacher


let anotherUsername = "coffeeandcode    "

String.prototype.truelength = function () {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.truelength()
"hitesh".truelength()
"iceTea".truelength()