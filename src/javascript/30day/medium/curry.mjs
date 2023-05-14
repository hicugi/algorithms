/**
 * @param {Function} fn
 * @return {Function}
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nargs) => curried(...args, ...nargs);
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

module.exports = { curry };
