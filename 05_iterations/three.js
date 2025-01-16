//array specific loops

//for of

//["","",""] //array of strings
// [{},{},{}] // array of objects

const arr = [1,4,3,7,5]

// //just like for(auto it : arr)
// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello Everyone"
// for (const greet of greetings) {
//     console.log(`each char of greetings is :${greet}`)
// }


//maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set("Fr","France")
map.set("IN","India")//wont get added as map only takes unique keys
map.set("IN","newyourk")///will get updated 

// and entries are shown in the same order that they were entered in

// console.log(map)

// for (const it of map) {
//     console.log(it)///prints key-value pairs as array
// }

// for (const [key,value] of map) {//destructuring of map
//     console.log(`${key} :- ${value}`) 
// }

const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman"
}


// this will throw error as object is not iterable for this loop
//there are other methods to iterate objects
// for (const [key,value] of myObject) {
//     console.log(`${key} :- ${value}`)
// }