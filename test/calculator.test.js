import Calculator from '../src/calculator'

test('it should return the sum of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.add()).toBe(15);
});

test('it should return the difference of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.subtract()).toBe(5);
});

test('it should return the multiple of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.multiply()).toBe(50);
});

test('it should return the division of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.divide()).toBe(2);
});