// // scope

// var c = 300
// console.log(c)

// let d = 89
// //rest area is global scope

// if(true){
//     //inside {} is block scope
//     let a = 10
//     const b = 20
//     var c = 30
//     let d = 34
//     console.log(d)//34
// }
// //scope in browser is not same as scope in node environment

// console.log(d)///89
// // console.log(a)
// // console.log(b)
// console.log(c) //only c get printed as var is not scope limited



function one(){//here parent function
    const username = "komal"

    function two(){//child function
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)//wont get executed

    two()
}

//child functions can access parent function's varianbles

// one()

if(true){
    const username = "komal"
    if(username === "komal"){
        const website = "youtube"
        // console.log(username+website)
    }
    // console.log(website)//wont get printed
}
// console.log(username)//wont get printed



// *******************interesting******************

addone(5)//still gets executes even though written before function declaration
function addone(num){//just function
    return num+1
}


addTwo(5)//gives error
const addTwo  = function(num){//function as an expression 
    return num+2
}