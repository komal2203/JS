// const promiseOne = new Promise(function (resolve, reject) {
//     //do an sync task
//     //DB task,crytography,network

//     setTimeout(function () {
//         console.log(`async task is complete`)
//         resolve()
//     }, 2000)
// })

// promiseOne.then(()=>{
//     console.log(`promise consumed`)
// })



// new Promise(function (resolve, reject) {
//     console.log(`async task 2 executed`)
//     resolve()
// }, 3000).then(function () {
//     console.log(`task 2 has been resolved`)
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "cofffee", email: "coffeekomal@gmail.com" })
//     }, 2000)
// })

// promiseThree.then(function (user) {
//     console.log(user)
// })





// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: "komal", passwrod: "123" })
//         } else {
//             reject(`ERROR: something went wrong`)
//         }
//     }, 2000)
// })

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function (error) {
//     console.log(error)
// }).finally(() => console.log(`The promise is either resolved or rejected`))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "456" })
        } else {
            reject('ERROR: Something went wrong ')
        }
    })
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)

    } catch (error) {
        console.log(`found error`)
    }
}

consumePromiseFive()


async  function getAllUsers(){
    fetch()
}