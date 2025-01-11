// let score = "33"

//overview of converting to Number
//"33" => 33 
//"33sfd" => Nan =>still considered a number
//null => 0 
//undefined => NaN => still considered a number
//true => 1

//overview of converting to boolean using Boolean
//0 => false;//1=> true
//"" => false
//"sfsf" => true


// //both give same output
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)



// let newScore = "33sdfd"
// let valInNumber = Number(newScore)
// console.log(valInNumber)///output is NaN//NaN => means not a number


// let score2 = null
// let val = Number(score2)
// console.log(val)//will print 0 

// let score3 = undefined
// let val3 = Number(score3)
// console.log(val3)//will print Nan

// let score4 = true
// let val4 = Number(score4)
// console.log(val4)//will print 1


// let logIn = 1
// let boolLogIn = Boolean(logIn)
// console.log(boolLogIn)///will print true

// let var1 = ""
// let boolvar1 = Boolean(var1)
// console.log(boolvar1)//will print false

// let var2 = "dfs"
// let boolvar2 = Boolean(var2)
// console.log(boolvar2)//will print true


// let num1 = 34
// let strnum1 = String(num1)
// console.log(strnum1)
// console.log(typeof strnum1)//string


// ***********operations**********

// let value = 3
// let negValue = -value
// console.log(negValue)//-3

// console.log(2+2)//4
// console.log(2-2)//0
// console.log(2%2)//0
// console.log(2/2)//1
// console.log(2*2)//4
// console.log(2*3)//8// 2 to the power 3

// let str1 = "hello"
// let str2 = " komal"
// let str3 = str1 + str2
// console.log(str3)//hello komal

// console.log("1" + 2)//12
// console.log(1 + "2")//12
// console.log("1" + 2 + 2)//122
// console.log(2 + 2 + "1")//41

// console.log(typeof ("1" + 2))///string
// console.log(typeof "1" + 2)// string2
// console.log(typeof 1 + "2")// number2


// console.log(true)//true
// console.log(+true)//1
// console.log(+false)//0
// console.log(+"")//0

let counter = 100
console.log(counter) //100
let newww = ++counter//here itself the value of counter get incremented
console.log(newww)//101
console.log(counter) //101

let newcounter = 100
console.log(newcounter)//100
let neww = newcounter++;//at this line of code the value of newcounter is 100
//but after this line it gets incremented

console.log(neww)//100
console.log(newcounter)//101

