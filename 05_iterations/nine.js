const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currVal) => {
    console.log(`accumulator is: ${acc}`)
    console.log(`currval is: ${currVal}`)
    return acc + currVal;//this return val is stored in the accumulator

}, 3)//here 0 is the initialvalue for accumulator

// //writing in compact manner
// const myTotal = myNums.reduce((acc,currVal)=> acc+currVal ,0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "c++ course",
        price: 4999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`total price of the cart is:${totalPrice}`)