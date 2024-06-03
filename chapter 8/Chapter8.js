// // //CHAPTER 8

"use strict";

// let s = "Hello";
// console.log(
//     s.concat(" there!")
//     .toUpperCase()
//     .replace("THERE", "you")
//     .concat(" You're amazing!")
// );

// let x = 7;
// console.log(Number.isNaN(x));
// console.log(isNaN(x));
// console.log()

// let uri = "http://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

// //Practice Exercise 8.1
// let decodedURIComponent = decodeURIComponent("How's%20it%20going%3f");
// console.log(decodedURIComponent);

// let paramteresURI = encodeURI("http://basescripts.com?=Hello World");
// console.log(paramteresURI);

// let str_int = "6.4.7";
// let float_int = parseInt(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "ob101";
// let float_binary = parseFloat(str_binary);
// console.log("type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

// //ARRAY METHODS
// let arr = ["grapefruit", 4, "hello", 5.6, true];

// function printStuff(element, index) {
//     console.log("printing stuff:", element, "on array position:", index);
// }

// arr.forEach(printStuff);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// }

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//     return typeof element === "string";
// }
// arr.filter(checkString).forEach((e, i) => console.log(e, "at index " + i));

// console.log(arr.every(checkString));

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);


// let arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr.map(x => x + 1).filter(e => e%2 === 0).forEach(e=>console.log(e));


// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));


// //PRACTICE EXERCISE 8.2

// const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Luarence", "Mike"];
// const arr2 = arr.filter((value, index, array) => {
//     //console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;
// }).forEach((e, i) => console.log("Index", i, e));
// //console.log(arr2);


// //PRACTICE EXERCISE 8.3

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArr.map(e => e * 2).forEach((e, i) => console.log("Index ", i, e));


// let myArr2 = myArr.map(e => e * 2);
// myArr2.forEach((e, i) => console.log("Index ", i, e));
// console.log(myArr2);


// //SRTING METHODS
// //CONCATENATING STRINGS
// let s1 = "Hello ";
// let s2 = "Javascript";
// let result = s1.concat(s2);
// console.log(result);

// let arr_result = result.split(" ");
// console.log(arr_result);

// let favFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favFruits.split(",");
// console.log(arr_fruits);


// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let letters2 = ["a", "b", "c"];
// let x2 = letters2.join('-');
// console.log(x2);


// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// let indexNotFound = poem.indexOf("Python");
// console.log(indexNotFound);

// if (poem.indexOf("Python") === -1) {
//     console.log("Not here!")
// }

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let notFound = searchStr.search("Javascript");
// console.log(notFound);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos2 = poem.charAt(1000);
// console.log(pos2);

// let str = "Creat a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0, 3);
// console.log("1:", substr1);
// console.log("2:", substr2);


// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

// let s4 = "hello hello";
// let new_s4 = s4.replaceAll("hello", "oh");
// console.log(new_s4);


// let caps = "HI, HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// //console.log(fixed_caps);
// console.log(first_capital);


// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);


//exercise 8.4
// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//     str = str.toLowerCase();
//     const tempArr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUppercase() + word.slilce(1);
//         tempArr.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(val));

// let words = "thIs will be capiTalized for each word";
// let newWords = changeWords(words);
// console.log(newWords)

// function changeWords(words) {
//     let words2 = words.toLowerCase();
//     let array = words2.split(" ");
//     let array2 = array.map(e => e.slice(0, 1).toUpperCase().concat(e.slice(1)));
//     array2.forEach(e => { console.log(e) });
//     return array2.join(" ");
// }

//exercise 8.5
// let sentance = "I love JavaScript";
// sentance = sentance.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// console.log(sentance);
// for (let i = 0; i < vowels.length; i++) {
//     sentance = sentance.replaceAll(vowels[i], i);
// }
// console.log(sentance);

//number methods
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// let str1 = "5";
// console.log(isNaN(str1));

//finite

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10/0));

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// let x = 1.23456;
// let newX = x.toFixed(3);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(2);
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

// let highest = Math.max(2, 56, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// let x = 6.78;
// let y = 5.34;

// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// let negativeX = -x;
// let negativeY = -y;

// console.log("negtiveX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes",Math.ceil(negativeY));

// console.log(Math.PI);
// console.log(Math.ceil(5.7), Math.floor(5.7), Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor((Math.random() * 10) + 1));
// console.log(Math.floor((Math.random()*100)+ 1));
// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x <100; x++){
//     console.log(ranNum(1, 100))
// }

//dates
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Wed Nov 08 2023 19:41:00 GMT+0200");
// console.log(stringDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200")
// console.log(stringDate);
// console.log(typeof(stringDate));

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("day of month:", d.getDate());
// console.log("month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:",d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setMonth(0);
// console.log(d);

// d.setDate(10);
// console.log(d);

// d.setHours(10);
// console.log(d);

// let d1 = Date.parse("June 5, 2021");
// console.log(d1)

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

// console.log(d.toDateString())
// console.log(d.toLocaleDateString());
