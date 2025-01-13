// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)//makes into string then gives its length
// console.log(balance.toFixed(2))//rounded upto 2 decimals 

// const anotherNumber = 123.8966
// console.log(anotherNumber.toPrecision(4))//123.9
// console.log(anotherNumber.toPrecision(3))//124
// console.log(anotherNumber.toPrecision(2))//1.2e+2

// const hundreds = 1000000
// console.log(hundreds.toLocaleString())//1,000,000
// console.log(hundreds.toLocaleString('en-IN'))//10,00,000



// *************maths*****************

// console.log(Math)//gives info about the by default Math object 
// //but that info is visible in browser console

// console.log(Math.abs(-34))//34

// console.log(Math.ceil(2.3))//3
// console.log(Math.floor(2.3))//2

// console.log(Math.round(4.3))//4
// console.log(Math.round(4.7))//5
// console.log(Math.round(-4.7))//-5

// console.log(Math.min(2,3,5,2,6,3))
// console.log(Math.max(2,3,5,2,6,3))

// console.log(Math.random())//generates any random number between 0 and 1
console.log(Math.random()*10)//numbers between 0 and 10
console.log((Math.random()*10)+1) //will give numbers between 1 and 10


// to get numbers between a range //this is a generic way of achieving this
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1)) + min)