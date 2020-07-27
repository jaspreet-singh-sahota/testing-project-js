import cipher from '../src/ceaser_cipher';

it('it should return a ciphered word', () => {
  expect(cipher('abc', 1)).toBe('bcd');
});

it('it should return a ciphered sentence', () => {
  expect(cipher('hello world', 3)).toBe('khoor zruog');
});

it('it should return a ciphered sentence with capital letters', () => {
  expect(cipher('Hello World', 3)).toBe('Khoor Zruog');
});
