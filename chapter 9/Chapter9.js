"use strict";

const ele1 = document.querySelector("h1");
console.dir(ele1);

const eles = document.querySelectorAll(".output");
console.log(eles);

const output = document.querySelector('.output');
output.textContent = "Hello World";
output.classList.add("red");
output.id = "tester";
output.style.backgroundColor = "red";
console.log(document.URL);
output.textContent = document.URL;