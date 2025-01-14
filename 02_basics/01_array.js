//ararys

const myArr = [0, 1, 2, 3, "komal"]
// //js arrays are resizable and 
// // can contain various data types at once as above exmple

// //shallow copy uses same reference points as the original object
// //deep copy do not the same reference points as the original object

// // const myHeroes = ["dr.strange","iron man"]
// // const myArr2 = new Array(2,4,6,7)
// // console.log(myArr2[2])


// //array methods
// myArr.push(8)
// myArr.push(13)//pushes the new element from the end

// console.log(myArr)
// myArr.pop()//pops the last element
// console.log(myArr)

// myArr.unshift(9)//inserts the element at start of the array //thus shifting rest of the elements 
// console.log(myArr)

// myArr.shift()//removes first element//kind of similar to left shift in electronics
// console.log(myArr)

// console.log(myArr.includes(0))//true
// console.log(myArr.indexOf(6))//gives -1

// const newArr = myArr.join()//joins elements into a string 
// console.log(newArr)
// console.log(typeof newArr)//string




//slice ,splice
 console.log("A",myArr)
 
 const myn1 = myArr.slice(0,4)//returns a copy of a section of the array
 //slice only uses a copy of the original array
 //(startIndex is inclusive,endINdex is exclusive)
 console.log(myn1)

 const myn2 = myArr.splice(1,3)//removes elements from the array from which it creates a splice
 //thus splice alters the actual array
 //(startIndex,deleteCount)
 console.log(myn2,"this is myn2")
 console.log(myArr,"this is myArr")