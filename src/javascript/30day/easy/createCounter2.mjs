/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
  let value = init;

  return {
    increment: () => ++value,
    reset: () => (value = init),
    decrement: () => --value,
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

module.exports = { createCounter };
