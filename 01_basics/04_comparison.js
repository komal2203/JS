// console.log(2 > 1)//true
// console.log(2 >= 1)//true
// console.log(2 < 1)//false
// console.log(2 != 1)//true

// console.log("2" > 1)//true
// console.log("02" > 1)//true



//reason is that comparison and equality operators work differently
//comparison converts null to 0 and compares
//wheres equality checks whether both values are equal 
// console.log(null > 0)//false
// console.log(null == 0)//false
// console.log(null >= 0)//true //> converts null to 0 to compares and then = gives true


// console.log(undefined > 0)//false
// console.log(undefined < 0)//false
// console.log(undefined == 0)//false
// console.log(undefined >= 0)//false


//=== checks equality of value and data type
// console.log("2" == 2)//true 
// console.log("2" === 2)//false