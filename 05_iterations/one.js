// for

//click on any variable and press ctrl+d as many times as youd like to select its duplicates

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     if(element == 5)console.log(`5 is best number`) 
//     console.log(element)
// }


// for (let i = 0; i < 2; i++) {
//     console.log(`outer loop value :${i}`)    
//     for (let j = 0; j < 3; j++) {
//         console.log(`inner loop value :${j}`)        
//     }
// }



// let arr = ["batman","superman","ironman"]
// console.log(arr.length)
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }


//break and continue

for (let i = 1; i < 20; i++) {
    if(i==2)continue//rest pf statements are not executed if i == 2
    console.log(`value of i is: ${i}`)
    if(i==5)break;
}