/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const ERROR_MSG = "Time Limit Exceeded";

function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      let isRejected = false;

      setTimeout(() => {
        isRejected = true;
        reject(ERROR_MSG);
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

module.exports = { ERROR_MSG, timeLimit };
