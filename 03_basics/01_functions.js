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


function addTwoNumbers(number1,number2){
    console.log("function was executed")//this will get printed
    // let result = number1 + number2
    // return result
    return number1+number2
    console.log("happu")//this line wont get executed as it is written after the return statement
    //the function never reaches till this statement
}

const result = addTwoNumbers(5,7)
console.log(result)


function loginUserMessage(username="sam"/*this is the default value of username if nothing is passed as an argument during function call */){
    if(username === undefined){ ///or the condition check can be if(!username)
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

// const str = loginUserMessage("komal")
// console.log(str)

console.log(loginUserMessage("komal"))//prints ->komal just logged in 

console.log(loginUserMessage())//prints -> undefined just logged in //if check is not setup in function
 