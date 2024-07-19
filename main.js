const numberButtons=document.querySelectorAll('.numberbtn');
const operatorButtons=document.querySelectorAll('.operators');
const input = document.querySelector("input");
const clearButton = document.getElementById('clear-button');
const clearStepButton = document.getElementById('clear-step-button');
let currentInput = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.value;
    input.value = currentInput;
  });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentInput && !operator) {
      firstNumber = currentInput;
      operator = button.value;
      currentInput = '';
    } else if (currentInput && operator) {
      secondNumber = currentInput;
      const result = operate(firstNumber, operator, secondNumber);
      input.value = result;
      currentInput = result;
      firstNumber = result;
      operator = button.value === '=' ? '' : button.value;
      secondNumber = '';
    }
  });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    input.value = '';
  });
  
  // Add event listener to clear step button
  clearStepButton.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    input.value = currentInput;
  });

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 'Error';
    }
  }