function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('clamp expects three numbers');
  }
  if (min > max) {
    throw new RangeError('clamp expects min <= max');
  }
  return Math.min(Math.max(value, min), max);
}
module.exports = clamp;
