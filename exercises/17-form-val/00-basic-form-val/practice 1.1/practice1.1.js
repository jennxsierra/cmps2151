"use strict";

const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function () {
  if (pwd.validity.patternMismatch) {
    pwd.setCustomValidity(
      "Your password must be at least 8 characters with at least one letter and one number"
    );
  } else if (pwd.value !== pwd2.value) {
    pwd.setCustomValidity("Your passwords must match");
  } else {
    pwd.setCustomValidity("");
  }
});
