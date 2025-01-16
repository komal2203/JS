// Javascript Execution Context(JEC)

//global execution context is created
//this...is referred to it

//  in JavaScript, the Execution Context (EC) is the environment where JavaScript code is executed. It defines the scope in which variables, functions, and objects are accessible during the execution of code.

// Types of Execution Contexts
// There are three types of execution contexts:

// Global Execution Context (GEC) – Created when a JavaScript file runs, representing the global scope (window in browsers, global in Node.js).

// Function Execution Context (FEC) – Created each time a function is invoked. Each function call gets its own separate context.

// Eval Execution Context – Created when the eval() function is used (rarely recommended).

// JavaScript is single-threaded means that it has one call stack and can only execute one task at a time. This is because JavaScript runs in a single execution context, handling tasks sequentially in the order they appear in the code.

// js runs any file in two phases
//first : memory creation phase
//second: execution phase

// 1.global execution or global environment created and (this) is referred

// 2.memory phase : all variables taken and set as      undefined
//  and store definition of functions

// 3.execution phase: values are assigned to the variables
//function get an execution context each time it is invoked and basicalluy includes (new variable environment and execution thread) and it gets deleted after its work is done


