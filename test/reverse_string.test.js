import reverseString from '../src/reverse_string'

test('it should return the reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

it('it should return a reversed sentence', () => {
  expect(reverseString('Hello World')).toMatch('dlroW olleH');
});
