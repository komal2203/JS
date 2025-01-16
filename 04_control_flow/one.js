///control flow or say logic flow

// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log(`logged in`)
// }

// const temperature = 89
// if(temperature<50){
//     console.log(`temp below 50`)
// }else{
//     console.log(`temp above 50`)
// }

// if(2=='2'){
//     console.log(`i am happy`)
// }else{
//     console.log(`i am very happy`)
// }

// // conditional operators
// // <=,>=,==,===,<,>,!=,!==
// ///=== is known as strict equal


// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// // console.log(`User power: ${power}`)//power not defined here


// const balance = 673

// // if(balance>500) console.log(`test`)///implicit scope

// if(balance<500){
//     console.log(`less than 500`)
// }else if(balance<750){
//     console.log(`less than 750`)
// }else if(balance < 900){
//     console.log(`less than 900`)
// }else{
//     console.log(`greater than 900`)
// }



const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if((loggedInFromGoogle || loggedInFromEmail) && debitCard&& 2==2){
    console.log(`allowed to buy courses`)
} 

if(loggedInFromEmail || loggedInFromGoogle)console.log(`user logged in`)


// Nullish Coalescing Operator(??)
//based on null and undefined

// The nullish coalescing operator (??) is a logical operator in JavaScript used to provide a default value when the expression on the left-hand side is null or undefined.

// You should use the nullish coalescing operator when you want to handle cases where a value might be null or undefined but still want to allow other falsy values (like 0, false, or an empty string) to be valid.

let val1 
// val1 = 5 ?? 10  ///here 5 gets assigned

// val1 = null ?? 10 // here 10 gets assigned
// val1 = undefined ?? 12 // here 12 het assigned to val1
val1 = null ?? 10
console.log(val1)


//ternary operator
// condition ? true : false

const price = 100
price>80 ? console.log(`greater than 80`) : console.log(`less than 80`)