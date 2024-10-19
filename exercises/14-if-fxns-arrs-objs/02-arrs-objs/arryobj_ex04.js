// convert comma-separated into an array
const countries = csv.split(",");
console.log(countries);

// convert array into delimited string
const countriesAsString = countries.join(", ");
console.log(countriesAsString);

// check if these are arrays
console.log("Is csv an array?", Array.isArray(csv));
console.log("Is countries an array?", Array.isArray(countries));
console.log("Is countriesAsString an array?", Array.isArray(countriesAsString));

//  sort a simple array
countries.sort((a, b) => a.localeCompare(b));
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift("Belize");
countries.unshift("Japan");
console.log(countries);

// search for element
console.log("Does countries contain 'Belize'?", countries.includes("Belize"));

// search for element index
console.log(
  "What is the index of 'Belize' in countries?",
  countries.indexOf("Belize")
);

// make a new array by extracting from another array
const countries2 = countries.toSpliced(0, 3);
console.log("New array:", countries2);
console.log("Original array:", countries);

console.log("---------------------");

// there are other array methods which you will learn in Ch 10 */

// use a loop to output all cities whose continent=="NA"
console.log("Cities in North America:");

cities.forEach((element) => {
  if (element?.continent == "NA") {
    console.log(element.city);
  }
});

console.log("---------------------");

// use a loop to output gallery names whose country=="USA"
console.log("Galleries in the USA:");

galleries.forEach((element) => {
  if (element?.location?.country == "USA") {
    console.log(element.name);
  }
});

console.log("---------------------");

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
console.log("Colors with luminance < 75:");

colors.forEach((element) => {
  if (element.luminance < 75) {
    console.log(element.name);
  }
});

console.log("---------------------");

// use two nested loops - outer: loop thru colors
// inner: loop thru rgb array and output each value
console.log("RGB values for each color:");

colors.forEach((element) => {
  const name = element?.name;
  let rgbStr = "";
  // inner loop
  element.rgb.forEach((value) => {
    rgbStr += value + " ";
  });

  console.log(`${name}: \x1b[35m%s\x1b[0m`, rgbStr);
});

console.log("---------------------");

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
document.write("<ul>");

galleries.forEach((element) => {
  document.write(`<li><a href="${element.url}">${element.name}</a></li>`);
});
