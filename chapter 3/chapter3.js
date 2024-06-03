"use strict" //always use strict

// let arr1 = new Array("purple", "green", "yellow");
// let arr2 = ["black", "orange", "pink"];

// let arr3 = new Array(10)
// let arr4 = [10];

// console.log(arr3);
// console.log(arr1, arr2, arr3, arr4);

// let arr = ["hi there", 5, true];
// console.log(typeof arr[0], typeof arr[1], typeof arr[2]);

// let arr = ["hello there"];
// arr[0] = "new value";
// console.log(arr[0]);

// arr = ["nope, now you are overwriting the array!"];

// console.log(arr[0]);

// let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[-1]);
// console.log(cars);
// cars[0] = "Tesla";
// console.log(cars[0]);
// console.log(cars);
// cars[3] = "Kia";
// cars[-1] = "Kia";
// console.log(cars[3], cars[-1]);

// let numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers.length);
// console.log(numbers);

//exercise 3.1

// let list = ["Milk", "Bread", "Apples"];
// console.log(list);
// console.log(list.length);
// list[1] = "Bananas";
// console.log(list);

// let faveFruits = ["grapes", "orange", "lemon"];
// faveFruits.push("tangerine"); 
// let l = faveFruits.push("lime");
// console.log(l);
// console.log(faveFruits);

// let arrOfShapes = ["circle", "triange", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid"); //(insert at index[x], replace at index[y], "new string1")
// console.log(arrOfShapes);
// let popped = arrOfShapes.pop();
// console.log("popped " + popped);
// console.log(arrOfShapes);
// popped = arrOfShapes.pop()
// console.log("popped " + popped);
// popped = arrOfShapes.pop()
// console.log(arrOfShapes);
// console.log("popped " + popped);
// popped = arrOfShapes.pop()
// console.log(arrOfShapes);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);
// arr8.pop();
// console.log(arr8);
// arr8.shift();
// console.log(arr8);
// arr8.splice(1, 3);
// console.log(arr8);
// delete arr8[0];
// console.log(arr8);

// let arr8 = [2, 3, 4, 5, 6, 7, 8];
// console.log(arr8);
// arr8.splice(1,3);
// console.log(arr8);
// delete arr8[0];
// console.log(arr8);

// let arr8 = [2, 6, 6, 2, 7, 8];
// let findValue = arr8.find(function(e) { return e === 6});
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);
// let findIndex = arr8.lastIndexOf(2);
// console.log(findIndex);
// let findIndex3 = arr8.indexOf(6, 2);
// console.log(findIndex3);
// let findIndex4 = arr8.indexOf(2, 2);
// console.log(findIndex4);

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");
// console.log(lastDog)

// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// names.sort();
// console.log(names);
// let numbers = [2, 1, 5, 9, 13, -123];
// numbers.sort();
// console.log(numbers);
// names.reverse();
// console.log(names);

//exercise 3.2
// let shoppingList = [];
// shoppingList[0] = "Milk";
// shoppingList[1] = "Bread";
// shoppingList[2] = "Apples";
// shoppingList.push("Milk", "Bread", "Apples");
// console.log(shoppingList);

// shoppingList.splice(1, 1, "Bananas", "Eggs");
// console.log(shoppingList);

// console.log(shoppingList.pop());

// let sortedList = shoppingList.sort();
// console.log(sortedList)

// let findIndexOfMilk = sortedList.lastIndexOf("Milk")
// console.log(findIndexOfMilk);

// sortedList.splice(1, 0, "Carrots", "Lettuce")
// console.log(sortedList);

// let newList = sortedList.concat(["Juice", "Pop"], ["Juice", "Pop"]);
// console.log(newList);

// let newList = ["Juice", "Pop"];

// let updatedList = sortedList.concat(newList, newList);
// console.log(updatedList);

// let lastIndex = updatedList.lastIndexOf("Pop");
// console.log(lastIndex);

// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];

// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays);
// console.log(arrOfArrays[0][1]);

// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let value1 = arrOfArrays[0][1];
// let value2 = arrOfArrays[2][2];

// let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// let middleValue = arrOfArraysOfArrays[1][1][1];
// console.log(middleValue);

//exercise 3.3
// let exerciseArray = [1, 2, 3];
// let newArray = [exerciseArray, exerciseArray, exerciseArray];
// console.log(newArray[0][1]);
// console.log(typeof newArray);

//objects

// let dog = { dogname: "Javascript",
//             weight: 2.4,
//             color: "brown",
//             breed: "chihuahua",
//             age: 3,
//             burglarBiter: true,
// };

// let dogColor1 = dog["color"]; 
// let dogColor2 = dog.color;
// console.log(dog.color);
// console.log(dogColor1, dogColor2);
// dog["color"] = "blue";
// dog.weight = 2.3;
// console.log(dog);

// dog["age"] = "three";
// console.log(dog);

// let variable = "age";
// console.log(dog[variable]);

// variable = "breed";
// console.log(dog[variable]);

// dog[variable] = "daschund";
// console.log(dog["breed"]);

//exercise 3.4
// let myCar = { make: "Toyota",
//               model: "Hilux",
//               year: 2012,
//               _4x4: true,
//               color: "White"
// };

// let myCarColor = "color";
// myCar[myCarColor] = "Blue";

// console.log(myCar);

// myCarColor = "forSale";
// myCar[myCarColor] = true;

// console.log(sort(myCar))
// console.log(myCar);

// console.log(myCar["make"], myCar["model"]);
// console.log(myCar["forSale"]);

// let company = { companyName: "Healthy Candy",
//                 activity: "food manufacturing",
//                 address: {
//                     street: "2nd Street",
//                     number: "123",
//                     zipcode: "33116",
//                     city: "Miami",
//                     state: "Florida"
//                 },
//                 yearOfEstablishment: 2011
// };

// company.address.zipcode = "33117";
// company["address"]["number"] = "100";
// console.log(company);

// company = { companyName: "Healthy Candy",
//             activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
//             address: {
//                 street: "2nd Street",
//                 number:  "123",
//                 zipcode: "33116",
//                 city: "Miami",
//                 state: "Florida"
//             },
//             yearOfEstablishment: 2021
// };

// let activity = company.activities[1];
// console.log(activity)

// let addresses = [{
//     street: "2nd Street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// },
// {
//     street: "1st West Avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];

// let streetName = addresses[0].street;
// console.log(streetName)

// company = { companyName: "Healthy Candy",
//                 activities: [ "food manufacturing",
//             "improving kids' health",
//         "manufacturing toys"],
//                     address: [{
//                         street: "2nd street",
//                         number: "123",
//                         zipcode: "33116",
//                         city: "Miami",
//                         state: "Florida"
//                     },
//                     {
//                         street: "1st West Avenue",
//                         number: "5",
//                         zipcode: "75001",
//                         city: "Addison",
//                         state: "texas"
//                     }],
//                     yearOfEstablishment: 2021
// };

// let streetName = company.address[0].street;
// console.log(streetName) 

// let people = {friends:[ scott = {fname: "Scott",
//                         lname: "Maddox",
//                         iDno: 122,},
//                 jack = {fname: "Jack",
//                         lname: "Stevens",
//                         iDno: 233,},
//                 mary = {fname: "Mary",
//                         lname: "Robinson",
//                         iDno: 11,}
//                 ],
// };

// console.log(people)

//exercise 3.5
// let people = { friends: [] }
// let scott = {
//     fname: "Scott",
//     lname: "Maddox",
//     IDno: 111,
// };
// let jack = {
//     fname: "Jack",
//     lname: "Harris",
//     IDno: 112,
// };
// let mary = {
//     fname: "Mary",
//     lname: "Robinson",
//     IDno: 113,
// };

// people.friends.push(scott, jack, mary)
// console.log(people)

// const theList = ['Laurence', 'Svekis', true, 35, null,
// undefined, {test: 'one', score: 55}, ['one', 'two']];

// theList.shift();
// theList.pop();
// theList.unshift("FIRST");
// theList[3] = "hello World";
// theList[2] = "MIDDLE";
// theList.splice(4, 4, "LAST");
// console.log(theList);

let storeItems = [];
let toyCar = {productName: "Super Car",
            model: 2012,
            cost: 299,
            quantity: 206,
}
let lego = {productName: "Indiana Jones",
            model: 2016,
            cost: 499,
            quantity: 100,
}
let dollHouse = {productName: "Super Doll House",
                 model: 2010,
                 cost: 399,
                 quantity: 10,
}
storeItems.push(toyCar, lego, dollHouse);
console.log(storeItems);
console.log(storeItems[2].quantity);

