const average = require('./average');

describe('average', () => {
  test('averages a list of integers', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  test('handles a single element', () => {
    expect(average([7])).toBe(7);
  });

  test('handles negative numbers', () => {
    expect(average([-2, 2])).toBe(0);
  });

  test('throws on an empty array', () => {
    expect(() => average([])).toThrow(TypeError);
  });

  test('throws on non-array input', () => {
    expect(() => average('1,2,3')).toThrow(TypeError);
  });
});
