const clamp = require('./clamp');

describe('clamp', () => {
  test('returns the value when it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  test('clamps to the minimum', () => {
    expect(clamp(-3, 0, 10)).toBe(0);
  });

  test('clamps to the maximum', () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });

  test('treats an equal min and max as a fixed point', () => {
    expect(clamp(7, 3, 3)).toBe(3);
  });

  test('throws when min is greater than max', () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });

  test('throws on non-numeric input', () => {
    expect(() => clamp('5', 0, 10)).toThrow(TypeError);
  });
});
