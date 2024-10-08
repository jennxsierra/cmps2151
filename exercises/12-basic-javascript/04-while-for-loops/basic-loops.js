// Print all numbers between -10 and 19
let numStr = "";
for (let i = -9; i < 19; i++) {
  numStr += i + " ";
}
console.log(numStr);

// Print all even numbers between 10 and 40
let evenNumStr = "";
for (let i = 11; i < 40; i++) {
  if (i % 2 == 0) {
    evenNumStr += i + " ";
  }
}
console.log(evenNumStr);

// Print all odd numbers between 300 and 333
let oddNumStr = "";
for (let i = 300; i < 333; i++) {
  if (i % 2 != 0) {
    oddNumStr += i + " ";
  }
}
console.log(oddNumStr);

// Print all numbers divisible by 5 AND 3 between 5 and 50
let fiveThreeNumStr = "";
for (let i = 6; i < 50; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    fiveThreeNumStr += i + " ";
  }
}
console.log(fiveThreeNumStr);
