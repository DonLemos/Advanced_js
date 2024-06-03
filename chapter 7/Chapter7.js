"use strict";
// //CHAPTER 7
// //CLASSES AND OBJECTS
// //This is a class for Dogs
// class Dog {
//     dogName;
//     weight;
//     color;
//     breed;

//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog1 = new Dog("Bella", 17, "Light Brown", "Spaniel");
// let dog2 = new Dog("Oscar", 8, "White & Brown", "Mixed Breed");

// console.log(dog1);
// console.log(dog2);

// console.log(`${dog1.dogName} is a ${dog1.breed} and weighs ${dog1.weight} and is ${dog1.color} in colour`);
// console.log(`${dog2.dogName} is a ${dog2.breed} and weighs ${dog2.weight} and is ${dog2.color} in colour`);


// class Person {
//     constructor(firstname, lastname, age, region) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.region = region;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
//     compliment(name, object) {
//         return `Thats a wonderful ${object}, ${name}`;
//     }
// }

// let p1 = new Person("Donovan", "Lemos");
// let p2 = new Person("Bryan", "Daniels");

// p1.greet();
// p2.greet();
// let compliment = p1.compliment("Donovan", "story");
// let compliment2 = p2.compliment("Bryan", "dog");
// console.log(compliment);




// let p = new Person("Donovan", "Lemos", 37, "Johannesburg");
// console.log(p);
// console.log(`Hi ${p.firstname} ${p.lastname}, your age is ${p.age} and you are from ${p.region}`);


// //PRACTICE EXERCISE 7.1

// let p3 = new Person("Bryan", "Daniels", 35, "Manchester");
// console.log(`Hi ${p3.firstname} ${p3.lastname}, you are ${p3.age} from ${p3.region}`);


// //PRACTICE EXERCISE 7.2
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let person1 = new Person("Maaike", "van Putten");
// let person2 = new Person("Laurence", "Svekis");
// console.log(person1.fullname());
// console.log(person2.fullname());

// //PROPERTIES
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname;
//         } else {
//             console.log("First name is too short");
//         }
//         if (lastname.length > 1) {
//             this.#lastname = lastname;
//         } else {
//             console.log("Last name is too short");
//         }
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname
//         } else {
//             console.log("First name is too short")
//         }
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         if (lastname.length > 1) {
//             this.#lastname = lastname
//         } else {
//             console.log("Last name is too short")
//         }
//     }
// }

// let p1 = new Person("Maaike", "van Putten");
// let p2 = new Person("Donovan", "Lemos");

// console.log(p1.firstname);
// p1.firstname = ("D");
// console.log(p1.firstname);


// //INHERITANCE
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;

//     }

//     move() {
//         console.log("Moving at", this.currentSpeed);
//     }
//     acceletate(amount) {
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }

// class Boat extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, direction) {
//         super(color, currentSpeed, maxSpeed);
//         this.direction = direction;
//     }
//     sail() {
//         console.log(`Sailing in the ${this.direction} direction`);
//         console.log(`Going at ${this.maxSpeed} Km/h!`)
//     }
// }


// let motor = new Motorcycle("Black", 0, 250, "Gasoline");
// console.log(motor.color);
// motor.acceletate(100);
// motor.move();
// let boat = new Boat("Black", 0, 100, "South West");
// boat.sail();


// //PROTOTYPES
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname;
//         } else {
//             console.log("First name is too short");
//         }
//         if (lastname.length > 1) {
//             this.#lastname = lastname;
//         } else {
//             console.log("Last name is too short");
//         }
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         if (firstname.length > 1) {
//             this.#firstname = firstname
//         } else {
//             console.log("First name is too short")
//         }
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         if (lastname.length > 1) {
//             this.#lastname = lastname
//         } else {
//             console.log("Last name is too short")
//         }
//     }
//     greet() {
//         console.log("Hi there, I'm ", this.firstname);
//     }
// }

// let p1 = new Person("Maaike", "van Putten");
// let p2 = new Person("Donovan", "Lemos");

// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// }

// p1.introduce();

// let person1 = new Person("Bryan", "Daniels");
// let person2 = new Person("Martin", "Pearman");
// person1.introduce();
// Person.prototype.favouriteColor = "Green";
// console.log(person1.favouriteColor);
// person1.favouriteColor = "Red";
// console.log(person1.favouriteColor);
// console.log(person2.favouriteColor);


// //PRACTICE EXERCISE 7.3
// class Animals {
//     constructor(species, sound) {
//         this.species = species;
//         this.sound = sound;
//     }
//     greet() {
//         console.log(`${this.sound}! I'm a ${this.species}!`)
//     }
// }

// Animals.prototype.performAction = function () {
//     return this.species + " is eating.";
// }
// Animals.prototype.action = "Jumped";
// let lion = new Animals("Lion", "Growl");
// let goAwayBird = new Animals("Go away bird!");
// lion.greet();
// console.log(lion.performAction());
// console.log(lion);
