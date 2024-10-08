// Prompt the user for the bill total
const billTotalInput = prompt("Please enter the bill total:");

// Check if the input is a valid number
if (billTotalInput <= 0) {
  console.error("Error: The input is not a valid number.");
} else {
  // Convert the input to a number
  const billTotal = Number(billTotalInput);

  // Define the tip percentage
  const tipPercentage = 0.1;

  // Calculate the tip amount
  const tipAmount = billTotal * tipPercentage;

  // Display the results
  console.log(
    `For bill of $${billTotal.toFixed(
      2
    )}, the tip should be $${tipAmount.toFixed(2)}`
  );
}
