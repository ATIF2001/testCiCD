// Calculator logic with pure functions for easy testing
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
  
  multiply(a, b) {
    return a * b;
  }
  
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

// DOM manipulation for the interface
const calculator = new Calculator();

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result;
  
  try {
    switch(operation) {
      case 'add':
        result = calculator.add(num1, num2);
        break;
      case 'subtract':
        result = calculator.subtract(num1, num2);
        break;
      case 'multiply':
        result = calculator.multiply(num1, num2);
        break;
      case 'divide':
        result = calculator.divide(num1, num2);
        break;
    }
    document.getElementById('result').innerHTML = `Result: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Error: ${error.message}`;
  }
}

// Export for testing (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Calculator };
}