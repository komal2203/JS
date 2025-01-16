//immediately invoked function expresssions (IIFE)

// function chai(){
//     console.log(`DB connected`)
// }
// chai()

//we use iife instead of normal declaration of function to protect from global scope pollution affecting the working of our function
//this is how iife is declared

//named iife ..
(function chai() {
  ///similar to chai()
  console.log(`DB connected`);
})(); //here ';' is necessary to end it here

//unnamed iife
(() => {
  //iife can also be declared using arrow functions
  console.log(`happy dance`);
})();

//unnamed iife
((name) => {
  //name is a parameter in function declaration
  //parameters are placeholders for arguments received in funtion calls
  console.log(`her name is ${name}`);
})("komal"); //here komal is an argument in the function call


