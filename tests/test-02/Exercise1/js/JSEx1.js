/* 	CMPS2151 - Test#2 - Web Development
    Student Name: Jennessa Sierra
    Exercise 1: Dice Game
	  Date: October 28, 2024 */

// Dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Dice 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Changing text of h1
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw! 😐";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
