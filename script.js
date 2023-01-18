let num1 = '';
let num2 = '';
let operator = '';

function calculator(val) {
  var display = document.getElementById("display");

  switch (val) {
    case '+':
    case '-':
    case '*':
    case '/':
      operator = val;
      num1 = display.value;
      display.value += val;
      break;
    case '=':
      num2 = display.value.split(operator)[1];
      display.value = calculate(num1, operator, num2);
      num1 = '';
      num2 = '';
      operator = '';
      break;
    case 'C':
      display.value = '';
      num1 = '';
      num2 = '';
      operator = '';
      break;
    default:
      display.value += val;
  }
}

function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}