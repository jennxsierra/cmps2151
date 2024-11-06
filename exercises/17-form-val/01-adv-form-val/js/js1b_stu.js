"use strict";
/*    Intermediate JavaScript
      Chapter: Form Validation
      CMPS2151 - Web Development
	  In Class Exercise

      Author: 
      Date:   

      Filename: js1b_stu.js
 */



// Validate the payment when the submit button is clicked Add eventListners here





// validateName() Function: Check if the owner's name is entered on the card ---------------  





// validateCard() Function: Check if a credit card has been selected -------------------- 





// validateNumber() Function: Check if the card number is valid --------------------





// validateMonth() Function: Check that a month is selected for the expiration date ------------------------





// validateYear() Function: Check that a year is selected for the expiration date ----------------------





// validateCVC() Function: Check that CVC is valid, check which card was selected and validate CVC ------------
























/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
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
   

