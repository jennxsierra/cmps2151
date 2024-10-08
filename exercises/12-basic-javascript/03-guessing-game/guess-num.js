// Guessing Game
let numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let userGuess;

do {
  userGuess = prompt("Guess a number between 1 and 100");
  if (userGuess > numberToGuess) {
    alert("Try again! Your number is too high.");
  } else if (userGuess < numberToGuess) {
    alert("Try again! Your number is too low.");
  }
} while (userGuess != numberToGuess);
alert("YOU GUESSED IT.");
