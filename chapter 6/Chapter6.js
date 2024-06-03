"use strict";
// //CHAPTER 6
// //FUNCTIONS
// //
// function sayHello() {
//     let you = prompt("What is your name?")
//     alert(`Hello ${you}!`);
// }
// sayHello();


// //NAMING FUNCTIOINS
// //PRACTICE EXERCISE 6.1
// function getSum() {
//    let firstNo = parseInt(prompt("Please give me your first number"));
//    let secondNo = parseInt(prompt("Please give me your second number"));
//    let addNos = firstNo + secondNo;
//    console.log(addNos)
// }
// getSum();


//PRACTICE EXERCISE 6.2



// //PRACTICE EXERCISE 6.3
// let no1 = parseInt(prompt("Insert first number: "));
// let no2 = parseInt(prompt("Insert secon number: "));
// let operator = "-";
// function calculate(a, b, c) {
//     if (operator == "-") {
//         console.log(a - b);
//      } else {
//             console.log(a + b)
//         }
//     }
//calculate(no1, no2, operator);

//
// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);

//SPECIAL FUNCTIONS & OPERATORS
//ARROW FUNCTIONS
// let addMyNumbers = (x = 2, y = 3) => console.log(x + y);
// addMyNumbers();


// function doingStuff(x) {
//     console.log(x);
// }

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");


// //SPREAD OPERATOR
// let spread = ["So", "Much", "fun"];
// let message = ["Javascript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);


// function addTwoNumbers(x, y) {
//     console.log(x + y)
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);
// let arr2 = [6, 7];


// //REST PARAMETERS
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");


//RETURNING FUNCTION VALUES
// let result = addTwoNumbers(4, 5);
// console.log(result);


// function addTwoNumbers(x, y) {
//     return(x + y)
// }
// let resultArr = [];

// for (let i =0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2 * i);
//     resultArr.push(result);
// }
// console.log(resultArr);


// //PRACTICE EXERCISE 6.4
// let sumArr = [];
// for (let i = 0; i < 10; i++) {
//     let value1 = i * 5
//     let value2 = i * i;
//     let res = calculate(value1, value2, "+");
//     sumArr.push(res);
// }
// console.log(sumArr);

// function calculate(a, b, op) {
//     if (op == "-") {
//         return (a - b)
//     } else {
//         return (a + b)
//     }
// }


// //RETURNING ARROW FUNCTIONS
// let addTwoNumbers = (x, y) => x + y;
// let result = addTwoNumbers(12, 5);
// console.log(result);

// function testAvailability(x) {
//     console.log("Available here:", x);
// }

// testAvailability("Hi");
// console.log("Not available here:", x);


// function testAvailability() {
//     let y = "Ill return";
//     console.log("Available here:", y);
//     return y;
// }

// let z = testAvailability()
// console.log("Outside the function", z);
// console.log("Not available here:", y);


// function doingStuff() {
//     if (true) {
//         var x = "local";
//     }
//     console.log(x);
// }

// function doingStuff() {
//     if (true) {
//         let x = "Local";
//     }
//     console.log(x)
// }
// doingStuff();


// //GLOBAL VARIABLES
// //
// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {
// console.log("Access to global vars inside function." , globalVar);
// }

// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);


// //GLOBAL VARIABLES
// let x = "Global";

// function doingStuff() {
//     let x = "Local";
//     console.log(x);
// }

// doingStuff();
// console.log(x);

// function connfusedReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// }

// connfusedReader();
// console.log("Outside the function:", x);


// //IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// //ARROW FUNCTION
// (() =>
//     console.log("IIFE")
// )();

// (function (x, y) {
// console.log(x, y);
// })(5, 7);

// ((x , y) =>
//     console.log(x, y)
// )("Hello" , "Don!");


// //PRACTICE EXERCISE 6.5
// //
// let x = "1000";
// console.log(x);

// (() => {
//     let x = "2000";
//     console.log(x);
// })();

// let result = (() => {
//     let x = "3000";
//     return x;
// })();
// console.log(result);

// ((x) => {
//     console.log(`Print param ${x}`);
// })(4000);

// console.log(x);


// //RECURSIVE FUNCTIONS
// //Infinite Loop as there is no stop function

// function getRecursive(nr) {
// console.log(nr);
// getRecursive(--nr);
// }
// getRecursive(3);

// //Now with a stop
// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);


// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
// }
// logRecursive(3);


// //PRACTICE EXERCISE 6.6
// //
// function calcFactorial(nr) {
//     if (nr === 0) {
//         return 1;
//     }
//     else {
//         return nr * calcFactorial(--nr);
//     }
// }

// let num = prompt("Give me a number and I will give you the factorial");
// alert("The factorial is: " + calcFactorial(num));



//NESTED INNER FUNCTIONS

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
// }
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log("Inner Function")
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
// function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }
// doOuterFunctionStuff(3);


// //PRACTICE EXERCISE 6.7

// let start = 10;

// function loop1(val) {
//     console.log(val);
//     if (val < 1) {
//         return;
//     }
//     return loop1(val - 1);
// }

// loop1(start);
// function loop2(val) {
//     console.log(val);
//     if (val > 0) {
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);


// //PRACTICE EXERCISE 6.8
// let myFunction = function(myFunction) {
//     console.log(myFunction);
// }
// myFunction("Hello");


// function myFunction2(myFunction) {
//     console.log(myFunction);
// }
// myFunction2("World");


//FUNCTION CALLBACKS

// function addNums() {
//     alert(1+2);
// }

// let functionVariable = function() {
//     console.log("Not so secret though.");
// };

// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuff.");
// }

// doFlexibleStuff(functionVariable);
// doFlexibleStuff(addNums);


// let youGotThis = function() {
//     console.log("You are doing really well, keep coding!");
// };


// setTimeout(youGotThis, 1000);


//CHAPTER 6 PROJECTS
