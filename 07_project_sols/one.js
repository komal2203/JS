const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")

buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === "yellow") {
            body.style.backgroundColor === "yellow"
        } else if (e.target.id === "grey") {
            body.style.backgroundColor = "grey"
        } else if (e.target.id === "blue") {
            body.style.backgroundColor = "blue"
        } else {
            body.style.backgroundColor = "white"
        }
    })

})