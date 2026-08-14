function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new TypeError('average expects a non-empty array of numbers');
  }
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
}
module.exports = average;
