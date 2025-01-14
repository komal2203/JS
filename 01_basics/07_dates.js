///dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())

// console.log(typeof myDate);///it is an object


// let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myNewCreatedDate = new Date(2025, 0, 23, 5, 4)
// console.log(myNewCreatedDate.toLocaleString())



// let myNew1CreatedDate = new Date("2025-02-22")
// console.log(myNew1CreatedDate.toLocaleString())
// console.log(myNew1CreatedDate.getTime())//gives milliseconds

// let myTimeStamp = Date.now()//gives milliseconds
// console.log(myTimeStamp)




//to get timme in seconds
console.log(Math.floor(Date.now() / 1000))//
// /divide by 1000 to get seconds from milliseconds



let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())


// newDate.toLocaleString
console.log(newDate.toLocaleString())

newDate.toLocaleString('default', {
    //on pressing ctrl+space ..you can see a lot of available properties
    weekday: "long"
})
console.log(newDate.toDateString())