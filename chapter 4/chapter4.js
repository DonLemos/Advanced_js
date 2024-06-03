"use strict";

// let hobby = "Dancing";

// if(hobby === "coding"){
//     alert("I love coding!")
// } else {
//     alert(`You can teach me ${hobby}!`)
// }

//ex 4.1

// let overAge = true;
// let overAge = confirm("Are you older than 17?");
// console.log(overAge);

// if(overAge){
//     alert("You are old enough to watch the movie!")
// } else {
//     alert("You are not old enough to watch the movie!")
// }

// if(!overAge){
//     alert("You are not old enough to watch the movie!")
// } else {
//     alert("You are old enough to watch the movie!")
// }

// let age = prompt("What is your age?");

// if(age < 12){
//     alert("You are not old enough to watch the movie!");
// } else if(age < 18){
//     alert("You may watch the movie if you are accompanied by an adult.");
// } else {
//     alert("You may watch the movie.");
// }

// let age = Number(prompt("What is your age?"));
// let cost = 0;

// if (age < 3){
//     cost = 0;
//     alert("Access is free under three.");
// } else if (age > 3 && age < 12){
//     cost = 5;
//     alert(`With the child discount, the fee is ${cost} dollars`)
// } else if (age > 12 && age < 65){
//     cost = 10;
//     alert(`A regular ticket costs ${cost} dollars`)
// } else {
//     cost = 7;
//     alert(`A ticket is ${cost} dollars`)
// }

//exercise 4.2

// let age = Number(prompt("What is your age?"));
// let message;
// if (age >= 21){
//     message = "You may enter the venue and purchase alcohol.";
// } else if (age >= 19) {
//     message = "You may enter the venue but not purchase alcohol.";
// } else {
//     message = "You may not enter the venue.";
// }

// console.log(message)

// let age = (Number)(prompt("What is your age?"));
// age < 18 ? alert("Entry Denied") : alert("You may enter.");

// let overAge = false;
// overAge === true ? console.log("old enough") : console.log("not old enough");

// let identity = (Number)(prompt("What is your age?"))
// age < 18 ? console.log("You are too young to enter, access is denied") : console.log("You are old enough to enter, access is granted.")

// let activity; 
// activity = prompt("What are you doing?");
// let activity2 = activity.toUpperCase();

// switch(activity2){
//     case "GET UP":
//         console.log("It is 6:30AM");
//         break;
//     case "BREAKFAST":
//         console.log("It is 7:00AM");
//         break;
//     case "DRIVE TO WORK":
//         console.log("It is 8:00AM");
//         break;
//     case "LUNCH":
//         console.log("It is 12:00PM");
//         break;
//     case "DRIVE HOME":
//         console.log("It is 5:00PM");
//         break;
//     case "DINNER":
//         console.log("It is 6:30PM");
//         break;
//     default:
//         console.log("I don't know what that is.")
//         break;
// }

//exercise 4.4
// let randomNumber = Math.random();
// randomNumber = randomNumber*6;
// let RandomNumber = Math.floor(randomNumber);

// let input = prompt("What do you seek?");
// let message;

// switch(RandomNumber){
//     case 0:
//         message = " will not be in your favour.";
//         break;
//     case 1:
//         message = " may soon be on the way.";
//         break;
//     case 2:
//         message = ", not likely...";
//         break;
//     case 3: 
//         message = ", maybe, if you're lucky.";
//         break;
//     case 4:
//         message = " is coming your way!";
//         break;
//     case 5: 
//         message = " , your future is full of it.";
//         break;
// }

// console.log(input + message)

// let prize;
// let value = (Number)(prompt("Choose a number between 0 and 10:"));
// let message;

// switch(value){
//     case 0:
//         prize = "a High 5";
//         break;
//     case 1:
//         prize = "a Teddy Bear";
//         break;
//     case 2:
//         prize = "a Balloon";
//         break;
//     case 3:
//         prize = "a Toy Car";
//         break;
//     case 4:
//         prize = "a nice walk in the park";
//         break;
//     case 5:
//         prize = "a trip to Disney Land";
//         break;
//     case 6:
//         prize = "a cow";
//         break;
//     case 7:
//         prize = "a bag of groceries";
//         break;
//     case 8:
//         prize = "a gym membership";
//         break;
//     case 9:
//         prize = "a Lunch Bar";
//         break;
//     case 10:
//         prize = "some bubblegum";
//         break;
// }

// message = `My Selection of ${value} won me ${prize}!`
// console.log(message)

// let number = (Number)(prompt("Choose a number between 1-10:"));
// if (number === 5){
//     alert("That's the secret number!");
// } else if (number < 1){
//     alert("That's lower than 1!");
// } else if (number < 5){
//     alert("Too low");
// } else if (number > 10){
//     alert("That's higher than 10!");
// } else if (number <= 10){
//     alert("Too high");
// }

// let friendName = prompt("What is your name?");
// let message;

// switch(friendName){
//     case "Jack":
//         message = ", you are a friend."
//         break;
//     case "James":
//         message = ", you are a friend."
//         break;
//     case "Thulani":
//         message = ", you are a friend."
//         break;
//     case "Precious":
//         message = ", you are a friend."
//         break;
//     default:
//         message = ", sorry, I don't know you."
//         break;
// }

// console.log(friendName + message);

// let choices = ["Rock", "Paper", "Scissors"];

// let randomChoice = Math.floor(Math.random() * 3);
// let computerSelection = choices[randomChoice];
// let message;
// let results;

// let playerChoice = prompt("Rock, Paper, Scissors:");


// if (computerSelection === playerChoice) {
//     results = "It's a tie!";
// } else if ((computerSelection === "Rock") && (playerChoice === "Paper")) {
//     results = "You win!";
// } else if ((computerSelection === "Paper") && (playerChoice === "Scissors")) {
//     results = "You win!";
// } else if ((computerSelection === "Scissors") && (playerChoice === "Rock")) {
//     results = "You win!"
// } else if ((computerSelection === "Rock") && (playerChoice === "Scissors")) {
//     results = "You lose!"
// } else if ((computerSelection === "Paper") && (playerChoice === "Rock")) {
//     results = "You lose!"
// } else if ((computerSelection === "Scissors") && (playerChoice === "Paper")) {
//     results = "You lose!"
// }

// message = results + " You chose: " + playerChoice + ", while the computer chose: " + computerSelection;
// console.log(message);



