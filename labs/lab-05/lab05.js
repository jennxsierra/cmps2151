"use strict";
/*  JavaScript Lab#5 - Form Validations
    StudentName: Jennessa Sierra
    Date: 20/11/2024

    Filename: lab05.js
*/

window.addEventListener("load", function () {
  // Q4: Call calcCart to calculate the shopping cart when the page loads
  calcCart();

  // Q4: Verify that the user has selected a fair package to attend by checking onclick and assigning it function call to fairTest
  document.getElementById("fairPkg").addEventListener("click", fairTest);

  // Q4: Get all 8 elements and use onblur for each to recalculate the shopping chart when any field loses the focus, call calcCart for each
  //note for the sessionBox use onchange
  const fields = [
    "fnBox",
    "lnBox",
    "groupBox",
    "mailBox",
    "phoneBox",
    "banquetBox",
    "mediaCB",
  ];
  fields.forEach((field) => {
    document.getElementById(field).addEventListener("blur", calcCart);
  });
  document.getElementById("banquetBox").addEventListener("change", calcCart);
  document.getElementById("mediaCB").addEventListener("change", calcCart);
  document.getElementById("fairPkg").addEventListener("change", calcCart);
}); //End of anonymous function

//Q5: fairTest() Function to verify that a fair package was selected by the user
function fairTest() {
  //Q5: Get the fairPkg element
  let fairPkg = document.getElementById("fairPkg");

  //Q5: check if the selected index is valid or not and display custom validity message
  if (fairPkg.selectedIndex === -1) {
    fairPkg.setCustomValidity("Select a Fair Package");
  } else {
    fairPkg.setCustomValidity("");
  }
} //End fairTest Function

//Q6: calcCart() Function to calculate the shopping cart total
function calcCart() {
  //Q6.1: Calculate the banquet cost for all guests
  let banquetBox = document.getElementById("banquetBox");
  let banquetCost = banquetBox.value * 55;

  //Q6:2 assign value to the same shopping element in the shopping cart
  document.getElementById("regBanquet").textContent = banquetBox.value;

  //Two variables are provided to determine the cost of the selected fair package
  let sessionCost = 0; // Initial cost of the fair package
  let sessionChoice = ""; // Initial chosen fair package

  //Q6.3:Get the selected Index of the chosen fair package
  let fairPkg = document.getElementById("fairPkg");
  let selectedIndex = fairPkg.selectedIndex;

  //Q6.4:Retrieve the name and cost of the selected fair package if valid index is selected
  if (selectedIndex !== -1) {
    sessionChoice = fairPkg.options[selectedIndex].text;
    sessionCost = parseInt(fairPkg.options[selectedIndex].value);
  }

  //Q6.5:Determine the cost of the media pack
  let giftCost = 0; // create variable for Initial media cost
  let giftChoice = ""; // create variable for Initial media choice

  //Q6.5: If the user selects the media pack, update the choice and cost
  let mediaCB = document.getElementById("mediaCB");
  if (mediaCB.checked) {
    giftChoice = "Yes";
    giftCost = 50;
  } else {
    giftChoice = "No";
  }

  /*Q6.6:Calculate total cost of the science fair by Multiply field values(cost of guest, fair pkg cost and gift cost)
  by 1 to convert them from text strings to numeric values*/
  let totalCost = (banquetCost + sessionCost + giftCost) * 1;

  //Q7.7: Display the field values and calculated values in the Shopping Cart table, ensure formatted correctly, use BZD currency for locale
  document.getElementById("regName").textContent =
    document.getElementById("fnBox").value +
    " " +
    document.getElementById("lnBox").value;
  document.getElementById("regGroup").textContent =
    document.getElementById("groupBox").value;
  document.getElementById("regEmail").textContent =
    document.getElementById("mailBox").value;
  document.getElementById("regPhone").textContent =
    document.getElementById("phoneBox").value;
  document.getElementById("regFair").textContent = sessionChoice;
  document.getElementById("regGift").textContent = giftChoice;
  document.getElementById("regTotal").textContent = totalCost.toLocaleString(
    "en-BZ",
    { style: "currency", currency: "BZD", currencyDisplay: "code" }
  );
} //End of calcCart Function
