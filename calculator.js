let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('display').value = currentNumber;
}

function setOperation(op) {
  if (currentNumber === '') return;
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (operation === '' || currentNumber === '') return;
  const result = eval(`${previousNumber}${operation}${currentNumber}`);
  document.getElementById('display').value = result;
  currentNumber = result;
  previousNumber = '';
  operation = '';
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = '';
  document.getElementById('display').value = '';
}
