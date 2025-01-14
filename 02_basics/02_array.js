// array part 2


const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// // push operation
//  marvel_heroes.push(dc_heroes)//pushes the entire array as an array into the marvel_heroes array 

// console.log(marvel_heroes)
// console.log(marvel_heroes[3])//entire dc_heroes
// console.log(marvel_heroes[3][2])//batman

// //concat option
// const allHeroes = marvel_heroes.concat(dc_heroes)//concat returns a new concatenated array 
// //concat can only concatenate two arrays at a time
// console.log(allHeroes)

// //spread operator //more frequently used
// //as it can join multiple array as one
// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)


const another_array = [1,2,4,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array)

const real_another_array  = another_array.flat(Infinity)//flattens the array
console.log(real_another_array)



console.log(Array.isArray("komal"))//false

console.log(Array.from("komal meena"))//the created also considers the blank space between komal and meena
//creates an array from an iterable object


console.log(Array.from({name :"komal"}))//interesting case as it give empty array 
//since we didnt mention whether we want the arraof keys or values

let score1 = 100
let score2  = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))//return a new array from a set of elements
