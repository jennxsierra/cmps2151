// change the color of the google link
const link = document.querySelector("a");
link.style.color = "green";

// change the color of h1
const h1 = document.querySelector("h1");
h1.style.color = "purple";

// change the color of the button
const button = document.querySelector("button");
button.style.backgroundColor = "yellow";

// apply a css class to the h1
h1.classList.add("invisible");

// toggle the css class on the h1
h1.classList.toggle("invisible");

// remove the css class from the h1
h1.classList.remove("invisible");

// apply .huge class to the button
button.classList.add("huge");

// remove .huge class from the button
button.classList.remove("huge");

// make hello change to a different color
// every time the button is clicked
button.addEventListener("click", function () {
  h1.style.color =
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";
});

// change link of first list item
const firstLink = document.querySelector("li a");
console.log("Current Link: ", firstLink.getAttribute("href"));
firstLink.setAttribute("href", "https://www.duckduckgo.com");
console.log("New Link: ", firstLink.getAttribute("href"));

// change the id of the title
const title = document.querySelector("h1");
console.log("Current ID: ", title.getAttribute("id"));
title.setAttribute("id", "hello");
console.log("New ID: ", title.getAttribute("id"));
