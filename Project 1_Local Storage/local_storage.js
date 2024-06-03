"use strict";

// Define the arrays to store todo tasks
let localTodoTasksArray = [];
let sessionTodoTasksArray = [];

// Select DOM elements
const localTodosContainer = document.getElementById('local-storage-todos-container');
const localInputEle = document.getElementById('local-storage-todo-input-ele');
const localAddTaskBtn = document.getElementById('local-storage-add-task-btn');

const sessionTodosContainer = document.getElementById('session-storage-todos-container');
const sessionInputEle = document.getElementById('session-storage-todo-input-ele');
const sessionAddTaskBtn = document.getElementById('session-storage-add-task-btn');

// Function to create <li> elements for todo tasks
function createTodoLiElements(todoArray) {
  return todoArray.map((task, index) => {
    const liElement = document.createElement('li');
    const checkboxEle = document.createElement('input');
    const labelEle = document.createElement('label');

    checkboxEle.setAttribute('type', 'checkbox');
    checkboxEle.setAttribute('id', `local-chbx-${index}`);
    labelEle.setAttribute('for', `local-chbx-${index}`);

    if (task.checked) {
      checkboxEle.checked = true;
      labelEle.classList.add('todo-task-done');
    }

    checkboxEle.addEventListener('click', (e) => {
      todoArray[index].checked = e.target.checked;
      updateStorageAndDisplay();
    });

    labelEle.textContent = task.text;
    liElement.append(checkboxEle, labelEle);
    return liElement;
  });
}

// Function to update storage and display
function updateStorageAndDisplay() {
  localStorage.setItem('localTodoTasksArray', JSON.stringify(localTodoTasksArray));
  sessionStorage.setItem('sessionTodoTasksArray', JSON.stringify(sessionTodoTasksArray));
  localTodosContainer.replaceChildren(...createTodoLiElements(localTodoTasksArray));
  sessionTodosContainer.replaceChildren(...createTodoLiElements(sessionTodoTasksArray));
}

// Event listener for adding tasks in local storage
localAddTaskBtn.addEventListener('click', () => {
  const newTask = { checked: false, text: localInputEle.value };
  localTodoTasksArray.push(newTask);
  updateStorageAndDisplay();
  localInputEle.value = '';
});

// Event listener for adding tasks in session storage
sessionAddTaskBtn.addEventListener('click', () => {
  const newTask = { checked: false, text: sessionInputEle.value };
  sessionTodoTasksArray.push(newTask);
  updateStorageAndDisplay();
  sessionInputEle.value = '';
});

// On page load
window.addEventListener('load', () => {
  // Retrieve tasks from local storage
  localTodoTasksArray = JSON.parse(localStorage.getItem('localTodoTasksArray')) || [];
  // Retrieve tasks from session storage
  sessionTodoTasksArray = JSON.parse(sessionStorage.getItem('sessionTodoTasksArray')) || [];
  // Update the display
  updateStorageAndDisplay();
});












// // WEB STORAGE SETITEM() METHOD

// // Example 1: How to store data in the session storage object
// // Invoke sessionStorage’s setItem() method.
// // Provide the name and value of the data you wish to store.

// // Store color: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("color", "Pink");

// // Log the session storage object to the console:
// console.log(sessionStorage);

// // The invocation above will return:
// {color: "Pink"}


// // Example 2: How to store data in the local storage object
// // Invoke localStorage’s setItem() method.
// // Provide the name and value of the data you wish to store.

// // Store color: "Pink" inside the browser's local storage object:
// localStorage.setItem("color", "Pink");

// // Log the local storage object to the console:
// console.log(localStorage);

// // The invocation above will return:
// {color: "Pink"}


// // Example 3: Browsers use "[object Object]" for non-serialized objects in the web storage

// // Store myBio object inside the browser's session storage object:
// sessionStorage.setItem("myBio", { name: "Oluwatobi" });

// // Log the session storage object to the console:
// console.log(sessionStorage);

// // The invocation above will return:
// {myBio: "[object Object]", length, 1};


// // Example 4: How to store serialized objects in the web storage

// // Store myBio object inside the browser's session storage object:
// sessionStorage.setItem("myBio", JSON.stringify({ name: "Oluwatobi" }));

// // Log the session storage object to the console:
// console.log(sessionStorage);

// // The invocation above will return:
// {myBio: '{"name":"Oluwatobi"}', length, 1};



// // WEB STORAGE KEY() METHOD

// // Example 1: How to get the name of an item in the session storage object
// // Invoke sessionStorage’s key() method.
// // Provide the index of the item whose name you wish to get.

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Get the name of the item at index 1:
// console.log(sessionStorage.key(1));


// // Example 2: How to get the name of an item in the local storage object
// // Invoke localStorage’s key() method.
// // Provide the index of the item whose name you wish to get.

// // Store carColor: "Pink" inside the browser's local storage object:
// localStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the local storage object:
// localStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the local storage object:
// localStorage.setItem("laptopColor", "White");

// // Get the name of the item at index 1:
// console.log(localStorage.key(1));


// //WEB STORAGE GETITEM() METHOD

// // Example 1: How to get data from the session storage object
// // Invoke sessionStorage’s getItem() method.
// // Provide the name of the data you wish to get.

// // Store color: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("color", "Pink");

// // Get color's value from the session storage:
// console.log(sessionStorage.getItem("color"));

// // The invocation above will return:
// "Pink"

// // Example 2: How to get data from the local storage object
// // Invoke localStorage’s getItem() method.
// // Provide the name of the data you wish to get.

// // Store color: "Pink" inside the browser's local storage object:
// localStorage.setItem("color", "Pink");

// // Get color's value from the local storage:
// console.log(localStorage.getItem("color"));

// // The invocation above will return:
// "Pink"


// //WEB STORAGE LENGTH PROPERTY

// // Example 1: How to verify the number of items in the session storage object
// // Invoke sessionStorage’s length property.

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Verify the number of items in the session storage:
// console.log(sessionStorage.length);

// // The invocation above may return:
// 6


// // Example 2: How to verify the number of items in the local storage object
// // Invoke localStorage’s length property.

// // Store carColor: "Pink" inside the browser's local storage object:
// localStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the local storage object:
// localStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the local storage object:
// localStorage.setItem("laptopColor", "White");

// // Verify the number of items in the local storage:
// console.log(localStorage.length);

// // The invocation above may return:
// 6


// // WEB STORAGE REMOVEITEM() METHOD

// // Example 1: How to remove data from the session storage object
// // Invoke sessionStorage’s removeItem() method.
// // Provide the name of the data you wish to remove.

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Remove the pcColor item from the session storage:
// sessionStorage.removeItem("pcColor");

// // Confirm whether the pcColor item still exists in the session storage:
// console.log(sessionStorage.getItem("pcColor"));

// // The invocation above will return:
// null


// // Example 2: How to remove data from the local storage object
// // Invoke localStorage’s removeItem() method.
// // Provide the name of the data you wish to remove.

// // Store carColor: "Pink" inside the browser's local storage object:
// localStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the local storage object:
// localStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the local storage object:
// localStorage.setItem("laptopColor", "White");

// // Remove the pcColor item from the local storage:
// localStorage.removeItem("pcColor");

// // Confirm whether the pcColor item still exists in the local storage:
// console.log(localStorage.getItem("pcColor"));

// // The invocation above will return:
// null


// // WEB STORAGE CLEAR() METHOD

// // Example 1: How to clear all items from the session storage object
// // Invoke sessionStorage’s clear() method.

// // Store carColor: "Pink" inside the browser's session storage object:
// sessionStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the session storage object:
// sessionStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the session storage object:
// sessionStorage.setItem("laptopColor", "White");

// // Clear all items from the session storage:
// sessionStorage.clear();

// // Confirm whether the session storage still contains any item:
// console.log(sessionStorage);

// // The invocation above will return:
// {length: 0}


// // Example 2: How to clear all items from the local storage object
// // Invoke localStorage’s clear() method.

// // Store carColor: "Pink" inside the browser's local storage object:
// localStorage.setItem("carColor", "Pink");

// // Store pcColor: "Yellow" inside the local storage object:
// localStorage.setItem("pcColor", "Yellow");

// // Store laptopColor: "White" inside the local storage object:
// localStorage.setItem("laptopColor", "White");

// // Clear all items from the local storage:
// localStorage.clear();

// // Confirm whether the local storage still contains any item:
// console.log(localStorage);

// // The invocation above will return:
// {length: 0}






