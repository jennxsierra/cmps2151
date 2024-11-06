function ProcessData(fname, email, gend, live, stat) {
  // Name
  const fullName = document.forms[0][fname].value;
  const firstName = fullName.split(" ")[0];
  const lastName = fullName.slice(fullName.indexOf(" ") + 1);

  // Email
  const chosenEmail = document.forms[0][email].value;

  // Gender
  const genderRadioGroup = document.getElementsByName(gend);
  let chosenGender;
  for (const radio of genderRadioGroup) {
    if (radio.checked) {
      chosenGender = radio.value;
    }
  }

  // Address
  const address = document.forms[0][live].value;

  // Status
  const status = document.forms[0][stat].value;

  // Output
  alert(
    `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${chosenEmail}\nGender: ${chosenGender}\nAddress: ${address}\nStatus: ${status}`
  );
}
