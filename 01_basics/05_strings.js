const name = "komal"
const repoCount = 60
// console.log(name+repoCount+" Value") //not prefered today

//by using backticks  ...this method known as string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Komal-Meena')//creates as an object and 
//provides functions of objects
//since its a string //therefore uses stack memory
//copy of string created 
//has key value pairs of KomalMeena

// console.log(gameName[0]) //K
// console.log(gameName[5]) //M
// console.log(gameName.__proto__) //prints {}
// console.log(gameName.length)//prints 10
// console.log(gameName.toUpperCase())//KOMALMEENA
// console.log(gameName.charAt(2)) //m
// console.log(gameName.indexOf('K'));//0

// const newString = gameName.substring(0,4)//indedx 4 is exclusive 
// console.log(newString)


// const anotherString = gameName.slice(-10,4)//same as substring 
// //but can also give negative indices
// console.log(anotherString)

// const newStringOne = "   komal   "
// console.log(newStringOne)
// console.log(newStringOne.trim())//trims the trailing and leading whitespaces
// // //whitespace characters is defined as whitespaces plus line terminators
// //trimStart() and trimEnd() are also present as functions

// const url = "https://komal.com/komal%20meena"
// console.log(url.replace('%20','-'))
// //(find part to be replaced,replace with)

// console.log(url.includes('komal'))//prints true

console.log(gameName.split('-'))//splits it wherever '-' is encountered
//and puts the rest of the part into an array
