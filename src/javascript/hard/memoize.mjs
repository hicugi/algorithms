/**
 * @param {Function} fn
 */
 const memoize = (fn) => {
  const cache = [];

  const saveCache = (args) => {
    const result = fn(...args);
    args.result = result
    cache.push(args);
    return result;
  };

  return (...args) => {
    cFor: for (const item of cache) {
      const cArgs = item;
      const cRes = cArgs.result;

      if (args.length == 0 && args.length == cArgs.length) {
        return cRes;
      }
      if (args.length != cArgs.length) continue;

      for (let i = 0; i < args.length; i++) {
        if (args[i] !== cArgs[i]) continue cFor;
      }

      return cRes;
    }

    return saveCache(args);
  };
};

module.exports = { memoize };
