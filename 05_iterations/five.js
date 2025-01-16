const coding = ['js','ruby','java','python','cpp']

// coding.forEach(/*here when we define function it should be nameless as it is a callback function */ )

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })


// function printMe(val){
//     console.log(val)
// }

// coding.forEach(printMe)//here we only give reference of function printMe


// //can also print index and array itself
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
    languageName:"javascript",
    languageFileName:"java"
    },
    {
    languageName:"python",
    languageFileName:"py"
    },
    {
    languageName:"c++",
    languageFileName:"cpp"
    },
    {
    languageName:"ruby",
    languageFileName:"r"
    }
]


// myCoding.forEach((item)=>{
//     console.log(item)
// }) ///prints each object in arr myCoding


myCoding.forEach((item)=>{
    console.log(item.languageName)
})//prints only languageName of each object in array myCoding