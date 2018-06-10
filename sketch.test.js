const sum = require('./sketch');

test('adds 1 and 2 to get 3', () => {
  expect(sum.addNumbers(1,2)).toBe(3);
});

test('multiplies 2 and 3 to get 6', () => {
  expect(sum.multiplyNumbers(2,3)).toBe(6);
});
