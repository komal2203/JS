const myObject = {
    js : "javascipt",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// //we use for in loop for objects
// //and we use for of loop for arrays and map

// for (const val in myObject) {//this by default prints keys of the object
//     console.log(`the key is:${val}`)
// }

// for (const key in myObject) {
//     console.log(`${key} :- ${myObject[key]}`)
// }

// const programming =['java','c++']

// for (const key in programming) {
//    console.log(programming[key])//to print java and c++ and etc
//    console.log(key)//to print the index of values
// }





// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set("Fr","France")
// map.set("IN","India")//wont get added as map only takes unique keys
// map.set("IN","newyourk")///will get updated 

// //wont work as map is not iterable for this loop
// for (const key in map) {
//    console.log(key)
// }