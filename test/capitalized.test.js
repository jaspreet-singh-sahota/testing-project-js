import capitalized from '../src/capitalized'

test('it should return the String with first character capitalized', () => {
  expect(capitalized('hello')).toBe('Hello');
});
