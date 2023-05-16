/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      let isRejected = false;

      setTimeout(() => {
        isRejected = true;
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((r) => {
          if (isRejected) return;
          resolve(r);
        })
        .catch(reject);
    });
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

module.exports = { timeLimit };
