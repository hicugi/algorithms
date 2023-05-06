/**
 * @return {Function}
 */
function createHelloWorld() {
  return () => "Hello World";
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

module.exports = { createHelloWorld };
