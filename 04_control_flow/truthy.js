// truthy and falsy values 

// const userEmail = "komal@gmail.com"//will act as true
// // const userEmail = ""//will act as false

// if(userEmail){
//     console.log(`received user email`)
// }else{
//     console.log(`user email does not exist`)
// }



//falsy values->8 values

// false,0,-0,BigInt 0n,"",null,undefined,Nan

// except these all others are tuthy values

//truthy values ...just some confusing ones 

//"0",'false'," ",[],{},function(){}


const arr = []

if(arr.length === 0){
    console.log(`array is empty`)
}else{
    console.log(`arr is not empty`)
}

const obj = {}

if(Object.keys(obj).length==0){
    console.log(`empty object`)
}else {
    console.log(`non empty array`)
}