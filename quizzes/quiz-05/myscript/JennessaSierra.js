/*
CMPS2151 - WEB DEV QUIZ#5
Script Source File
Filename: JennessaSierra.js
Student Name: Jennessa Sierra
*/

/*--------------------------------------Exercise 1: DOM Manipulation --------------------------------*/
// Select all the <label> elements that have class="icon"
const allIconLabels = document.querySelectorAll("label.icon");
console.log(allIconLabels);

// Select only second <label> with class="icon"
const secondIconLabel = document.querySelectorAll("label.icon")[1];
console.log(secondIconLabel);

// Select all the <input> elements with type=text.
const allTextInputs = document.querySelectorAll('input[type="text"]');
console.log(allTextInputs);

/*-----------------------------------------Exercise 2: Color Toggle --------------------------------*/
// Toggles the background color to purple when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
  });
});

/*---------------------------------------------Exercise 3: TODO LIST------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll("ul li");

  listItems.forEach((item) => {
    // Event listener for mouseover to add 'selected' class
    item.addEventListener("mouseover", function () {
      item.classList.add("selected");
    });

    // Event listener for mouseout to remove 'selected' class
    item.addEventListener("mouseout", function () {
      item.classList.remove("selected");
    });

    // Event listener for click to add 'done' class
    item.addEventListener("click", function () {
      item.classList.toggle("done");
    });
  });
});
