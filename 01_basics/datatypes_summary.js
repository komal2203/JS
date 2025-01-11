
//js is dynamically typed language//as no need to declare datatype ///jsut use let var whatever

///c++ is a statically typed language as we describe the data type while declaring a variable


//data types have been categorized into two categories 
// on the basis of how they are stored and accessed from memory

//#Primitive data types  => always called by value
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

//110 and 110.23 both are considered Number //no specially defined float or double data type

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id)//Symbol(123)
// console.log(anotherId)//Symbol(123)
// console.log(id == anotherId)//false
// console.log(id === anotherId)//false


// const bigNumber = 2425352353363n//on writing n it becomes BigInt
// console.log(typeof bigNumber)//bigint


//#Non Primitive => called by reference
//Array, Object, Functions -> all  3 three of these data type is object
// but that of function of onjectfuntion or simply functoin

//array
const heroes = ["Thor", "Iron Man", "Dr. Strange", "Thanos", "Loki"]

//object =>key value pairs in curly braces
let myObj = {
    name: "komal",
    age: "21",
    weight: 41
}

//function =>defining as variable
const myFunction = function () {
    console.log("Hello World")
}

console.log(typeof heroes)//object
console.log(typeof myObj)//object
console.log(typeof myFunction)//funtion or say object funtion //that is it is subtype of object

//important
console.log(typeof null)//object
console.log(typeof undefined)//undefined
console.log(typeof true)//boolean

// console.log(typeof obj1)
console.log(typeof myObj)//object
//if obj1 is native and does not implement a call then it is object

//console.log(typeof obj2)
//if obj2 is native or host and does implement a call then it is a function

