/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
  let value = n;

  return () => {
    const result = value;
    value++;
    return result;
  };
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

module.exports = { createCounter };
