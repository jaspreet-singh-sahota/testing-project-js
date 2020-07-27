import Calculator from '../src/calculator'

test('it should return the sum of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.add()).toBe(15);
});

test('it should return the sum of two negative numbers', () => {
  const calc = new Calculator(5, -10)
  expect(calc.add()).toBe(-5);
});

test('it should return NAN if arguments(num1, num2) are not provided', () => {
  const calc = new Calculator()
  expect(calc.add()).toBe(NaN);
});

test('it should return the difference of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.subtract()).toBe(5);
});

it('it should return the difference of two numbers even if one is negative', () => {
  const calc = new Calculator(5, -10)
  expect(calc.subtract()).toBe(15);
});

test('it should return the multiple of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.multiply()).toBe(50);
});

test('it should return the division of two numbers', () => {
  const calc = new Calculator(10, 5)
  expect(calc.divide()).toBe(2);
});

test('it should return Infinity if number is divided by 0', () => {
  const calc = new Calculator(10, 0)
  expect(calc.divide()).toBe(Infinity);
});
