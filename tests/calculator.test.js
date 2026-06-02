const { Calculator } = require('../src/calculator.js');

describe('Calculator Tests', () => {
  let calc;
  
  beforeEach(() => {
    calc = new Calculator();
  });
  
  test('adds two numbers correctly', () => {
    expect(calc.add(5, 3)).toBe(8);
    expect(calc.add(-1, 1)).toBe(0);
    expect(calc.add(0, 0)).toBe(0);
  });
  
  test('subtracts two numbers correctly', () => {
    expect(calc.subtract(10, 4)).toBe(6);
    expect(calc.subtract(0, 5)).toBe(-5);
  });
  
  test('multiplies two numbers correctly', () => {
    expect(calc.multiply(4, 3)).toBe(12);
    expect(calc.multiply(0, 5)).toBe(0);
  });
  
  test('divides two numbers correctly', () => {
    expect(calc.divide(10, 2)).toBe(5);
    expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});