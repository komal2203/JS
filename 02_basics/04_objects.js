// objects part 2

// // const tinderUser = new Object()//singleton object
// // or
const tinderUser = {} //non-singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// //same output
// console.log(tinderUser)//{}



// const regularUser ={
//     email: "some@gmail.com",
//     fullname : {
//         userfullname:{
//             firstname: "komal",
//             lastname: "meena"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1,obj2}
 
// const obj3 = Object.assign({},obj1,obj2)//returns afinal object after copying from sources
//(target,source1,source2,etc)

const obj3 = {...obj1,...obj2}//most used syntax

// console.log(obj3)




// //mostly when we receive data from databases..it's generally in the form of array of objects
// const users = [
//     {
//         id:1,
//         email:"komal@gmail.com"
//     }, {
//         id:1,
//         email:"komal@gmail.com"
//     }, {
//         id:1,
//         email:"komal@gmail.com"
//     }, {
//         id:1,
//         email:"komal@gmail.com"
//     }, {
//         id:1,
//         email:"komal@gmail.com"
//     }, {
//         id:1,
//         email:"komal@gmail.com"
//     },
// ]

// console.log(users[1])
// console.log(users[2].email)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))//return an array of  keys
// console.log(Object.values(tinderUser))//returns array of values
// console.log(Object.entries(tinderUser))//returns array of array of each key value pair

// console.log(tinderUser.hasOwnProperty('id'))//checks the existance of property 



//destructuring is possible for both arrays and objects

const course = {
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}
 
//course.courseInstructor // a way of accessing a property

const {courseInstructor: instructor} = course///destructuring an object 
console.log(instructor)




// sample of json 
// {
//     "name": "komal",
//     "age": "twenty-one",
//      "height": 150,
//       "happy": true,
//     "gender":"female"
// }

