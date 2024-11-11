"use strict";

const submitButton = document.querySelector("#submitButton");
const pwdField = document.querySelector("#pwd");
const confirmPwdField = document.querySelector("#pwd2");
const message = document.querySelector("#message");

submitButton.addEventListener("click", (e) => {
  if (pwdField.validity.patternMismatch) {
    pwdField.setCustomValidity(
      "Password must contain at least 8 characters and contain at least one number and one letter."
    );
  } else if (pwdField.value !== confirmPwdField.value) {
    confirmPwdField.setCustomValidity("Passwords do not match.");
  } else {
    pwdField.setCustomValidity("");
  }
});
