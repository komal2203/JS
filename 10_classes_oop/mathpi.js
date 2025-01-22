
// // console.log(Math.PI)
// // Math.PI = 5//cnnt change value of pi like this 
// // console.log(Math.PI)

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const chai = {
    name: "ginger",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log(`code fatt gya`)
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))


// for (let [key, value] of chai) {
//     console.log(`${key} :${value}`)
// }///not iterable

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} :${value}`)
    }
}

