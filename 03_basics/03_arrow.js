//arrow functions

const user = {
    username:"komal",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)//it prints the current context of the object
    }
    //this ... is used to refer to current context

}

// // user.welcomeMessage// no output ..as this is just reference of the function
// user.welcomeMessage()//prints-> komal, welcome to website

// user.username = "sam"//here we changed the context of the user object
// //context means values

// user.welcomeMessage()//prints for sam


// console.log(this)//prints {}
//since we are in node environment ...
//this ..refers to an empty object
//because there is no context in global

//in browser ...window is the global object


// function chai(){
//     console.log(this)
// }
// chai()//it give output similar to console.log(this) in browser



// function chai(){
//     let username = "komal"
//     console.log(this.username)
// }
// chai()//gives undefined 
// ///as statements like this.username only work in objects not function



const chai = ()=>{
}