// Function to calculate BMI given weight and height
function calculateBMI(weight, height) {
  var bmi = weight / Math.pow(height, 2); // Formula for BMI
  return Math.round(bmi); // Round to nearest whole number
}

let userWeight = prompt("Please enter weight in kilograms:");
let userHeight = prompt("Please enter height in meters:");

let userBMI = calculateBMI(userWeight, userHeight);

console.log("Your BMI is " + userBMI + ".");
