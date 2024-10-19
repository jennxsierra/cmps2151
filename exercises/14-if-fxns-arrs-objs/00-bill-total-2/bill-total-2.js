// Define the billTotals array
const billTotals = [50, 150, 20, 500];

// Define an array to store the tips
const tips = [];

// Define the calculateTip function
function calculateTip(total) {
  let tipPercentage;
  if (total > 75) {
    tipPercentage = 0.1;
  } else if (total >= 30) {
    tipPercentage = 0.2;
  } else {
    tipPercentage = 0.3;
  }
  return total * tipPercentage;
}

// Loop through the billTotals array
for (let i = 0; i < billTotals.length; i++) {
  // Calculate the tip using the function
  const tip = calculateTip(billTotals[i]);

  // Add the tip to the tips array
  tips.push(tip);
}

// Output the results
for (let i = 0; i < billTotals.length; i++) {
  console.log(
    `For bill of $${billTotals[i].toFixed(2)}, the tip should be $${tips[
      i
    ].toFixed(2)}`
  );
}
