function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Prompt the user to enter a year
let userInput = prompt("Please enter a year:");

// Convert user input to a number and check if it's a leap year
if (isLeapYear(Number(userInput))) {
  alert(userInput + " is a leap year.");
} else {
  alert(userInput + " is not a leap year.");
}
