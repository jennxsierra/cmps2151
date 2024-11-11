"use strict";

// Validate the payment when the submit button is clicked Add eventListners here
let subButton = document.getElementById("subButton");
let subButton2 = document.getElementById("subButton");
subButton.addEventListener("click", validateName);
subButton2.addEventListener("click", validateCVC);

// validateName() Function: Check if the owner's name is entered on the card ---------------
function validateName() {
  let cardName = document.getElementById("cardName");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter your name as it appears on the card");
  } else {
    cardName.setCustomValidity("");
  }
}

// validateCard() Function: Check if a credit card has been selected --------------------
function validateCard() {
  let card = document.forms.payment.elements.credit[0];
  if (card.validity.valueMissing) {
    card.setCustomValidity("Select your credit card");
  } else {
    card.setCustomValidity("");
  }
}

// validateNumber() Function: Check if the card number is valid --------------------
function validateNumber() {
  let cNum = document.getElementById("cardNumber");
  if (cNum.validity.valueMissing) {
    cNum.setCustomValidity("Enter your card number");
  } else if (cNum.validity.patternMismatch) {
    cNum.setCustomValidity("Enter a valid card number");
  } else if (luhn(cNum.value) === false) {
    cNum.setCustomValidity("Enter a legitimate card number");
  } else {
    cNum.setCustomValidity("");
  }
}

// validateMonth() Function: Check that a month is selected for the expiration date ------------------------
function validateMonth() {
  let month = document.getElementById("expMonth");
  if (month.selectedIndex === 0) {
    month.setCustomValidity("Select the expiration month");
  } else {
    month.setCustomValidity("");
  }
}

// validateYear() Function: Check that a year is selected for the expiration date ----------------------
function validateYear() {
  let year = document.getElementById("expYear");
  if (year.selectedIndex === 0) {
    year.setCustomValidity("Select the expiration year");
  } else {
    year.setCustomValidity("");
  }
}

// validateCVC() Function: Check that CVC is valid, check which card was selected and validate CVC ------------
function validateCVC() {
  // Determine which card was selected
  let card = document.querySelector('input[name="credit"]:checked').value;
  let cvc = document.getElementById("cvc");

  // Validate the CVC value
  if (cvc.validity.valueMissing) {
    cvc.setCustomValidity("Enter your CVC number");
  } else if (card === "amex" && !/^\d{4}$/.test(cvc.value)) {
    cvc.setCustomValidity("Enter a 4-digit number");
  } else if (card !== "amex" && !/^\d{3}$/.test(cvc.value)) {
    cvc.setCustomValidity("Enter a 3-digit number");
  } else {
    cvc.setCustomValidity("");
  }
}

/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
  let string1 = "";
  let string2 = "";

  // Retrieve the odd-numbered digits starting from the back
  for (let i = idNum.length - 1; i >= 0; i -= 2) {
    string1 += idNum.charAt(i);
  }
  // Retrieve the even-numbered digits starting from the back and double them
  for (let i = idNum.length - 2; i >= 0; i -= 2) {
    string2 += 2 * idNum.charAt(i);
  }

  // Return whether the sum of the digits is divisible by 10
  return sumDigits(string1 + string2) % 10 === 0;

  function sumDigits(numStr) {
    let digitTotal = 0;
    for (let i = 0; i < numStr.length; i++) {
      digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
  }
}
