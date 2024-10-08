function timeLeft() {
  const currentAge = prompt("Please enter your current age:");
  const daysInYear = 365;
  const weeksInYear = 52;
  const monthsInYear = 12;
  const yearsLeft = 90 - currentAge;
  const daysLeft = yearsLeft * daysInYear;
  const weeksLeft = yearsLeft * weeksInYear;
  const monthsLeft = yearsLeft * monthsInYear;
  console.log(
    `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`
  );
}

console.log(timeLeft());
