const multiplyButton = document.querySelector('input[value="Multiply"]');
const divideButton = document.querySelector('input[value="Divide"]');
const result = document.querySelector("#result");

const multiplyBy = () => {
  const firstNumberInput = document.querySelector("#firstNumber");
  const secondNumberInput = document.querySelector("#secondNumber");

  const firstValue = firstNumberInput.value;
  const secondValue = secondNumberInput.value;

  const product = firstValue * secondValue;

  result.innerHTML = product;
};

const divideBy = () => {
  const firstNumberInput = document.querySelector("#firstNumber");
  const secondNumberInput = document.querySelector("#secondNumber");

  const firstValue = firstNumberInput.value;
  const secondValue = secondNumberInput.value;

  const quotient = firstValue / secondValue;

  result.innerHTML = quotient;
};

multiplyButton.addEventListener("click", multiplyBy);
divideButton.addEventListener("click", divideBy);
