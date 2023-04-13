/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
const getProto = (obj) => Object.getPrototypeOf(obj);
const validate = (obj) => ![null, undefined].includes(obj);

const checkIfInstanceOf = (obj, classFunction) => {
  if (!validate(obj) || !validate(classFunction)) return false;

  const compareFn = (() => {
    try {
      return getProto(new classFunction());
    } catch {
      try {
        if (typeof classFunction() === "symbol") {
          return getProto(classFunction());
        }
      } catch {
        return false;
      }

      return false;
    }
  })();
  if (compareFn === false) return false;

  do {
    obj = getProto(obj);
    if (obj === compareFn) return true;
  } while (obj !== null);

  return false;
};

module.exports = { checkIfInstanceOf };
