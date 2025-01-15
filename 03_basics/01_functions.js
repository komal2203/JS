// functions


function sayMyName(){
    console.log("komal")
    console.log("meena")
}

// sayMyName///reference of the function
// sayMyName()//execution of function

// sayMyName()



// function addTwoNumbers(number1,number2){//in js function parameters not necessary to specify data type //but can cause errors
//     console.log(number1+number2)
// }

// addTwoNumbers(3,4)//7
// addTwoNumbers(3,"4")//34
// addTwoNumbers(3,'a')//3a 



// function addTwoNumbers(number1,number2){
//     console.log("function was executed")//this will get printed
//     // let result = number1 + number2
//     // return result
//     return number1+number2
//     console.log("happu")//this line wont get executed as it is written after the return statement
//     //the function never reaches till this statement
// }

// const result = addTwoNumbers(5,7)
// console.log(result)



function loginUserMessage(username="sam"/*this is the default value of username if nothing is passed as an argument during function call */){
    if(username === undefined){ ///or the condition check can be if(!username)
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

// const str = loginUserMessage("komal")
// console.log(str)

// console.log(loginUserMessage("komal"))//prints ->komal just logged in 

// console.log(loginUserMessage())//prints -> undefined just logged in //if check is not setup in function
 

///both spread operator and rest operator are written as ...
//their functionality depends on usage of ...

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,300,400))///gives array of these values

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(100,200,300,500))//[300,500]
// //   100 taken as val1
// //   200 taken as val2



const user = {
    username:"komal",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"shubham",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}
 
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([5,7,2,1]))