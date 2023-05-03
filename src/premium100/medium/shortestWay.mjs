/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
function shortestWay(source, target) {
  let result = 0;

  let isInvalid;
  for (let i = 0; i < target.length; ) {
    isInvalid = true;

    for (let j = 0; j < source.length; j++) {
      if (target[i] === source[j]) {
        isInvalid = false;
        i++;
      }
    }
    if (isInvalid) return -1;

    result++;
  }

  return result;
}

module.exports = { shortestWay };
