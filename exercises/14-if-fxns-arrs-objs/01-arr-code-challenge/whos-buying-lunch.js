function whoIsBuyingLunch(names) {
  // Get the length of the array
  const namesLength = names.length;

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * namesLength);

  // Return the name of the lucky person
  return `${names[randomIndex]} is going to buy lunch today!`;
}

const names = ["Manuel", "Ben", "David", "Andres", "Carlos"];
console.log(whoIsBuyingLunch(names));
