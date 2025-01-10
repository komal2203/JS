const accountId = 124234
let accountEmail = "komal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"


// accountId = 23453//not allowed

accountEmail = "hchc@gmail.com"
accountPassword = "e5345435"
accountCity = "bagalore"//should avoid declaring variables in this manner
let accountState//will print undefines on console
///can use semicolon if u wish to //it is not mandatory in JS

console.log(accountId);



console.table([accountEmail,accountCity,accountId,accountPassword,accountState])

/*prefer not to use var because of issue in block scope and functional scope */