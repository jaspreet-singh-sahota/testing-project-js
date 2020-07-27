import analyse from '../src/analyse'

test('it should return average, minimum, maximum and length of array in an object ', () => {
  expect(analyse([1,2,3,4])).toMatchObject({"average": 2.5, "min": 1, "max": 4, "length": 4});
});

test('it should have the property average', () => {
  expect(analyse([1,2,3,4])).toHaveProperty("average", 2.5);
});

test('it should have the property minimum', () => {
  expect(analyse([1,2,3,4])).toHaveProperty("min", 1);
});

test('it should have the property maximum', () => {
  expect(analyse([1,2,3,4])).toHaveProperty("max", 4);
});

test('it should have the property length', () => {
  expect(analyse([1,2,3,4])).toHaveProperty("length", 4);
});
