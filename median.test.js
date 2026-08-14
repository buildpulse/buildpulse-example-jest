const median = require('./median');

describe('median', () => {
  test('odd-length list returns the middle element', () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  test('even-length list returns the mean of the two middle elements', () => {
    expect(median([4, 1, 3, 2])).toBe(2.5);
  });

  test('does not mutate the input array', () => {
    const input = [3, 1, 2];
    median(input);
    expect(input).toEqual([3, 1, 2]);
  });

  test('handles negative numbers', () => {
    expect(median([-5, 0, 5])).toBe(0);
  });

  test('throws on an empty array', () => {
    expect(() => median([])).toThrow(TypeError);
  });
});
