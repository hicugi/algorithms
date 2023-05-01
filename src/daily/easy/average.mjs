/**
 * @param {number[]} salary
 * @return {number}
 */
function average(salary) {
  let min = Infinity;
  let max = -Infinity;

  for (let n of salary) {
    min = Math.min(min, n);
    max = Math.max(max, n);
  }

  let sum = 0;
  for (let n of salary) {
    if ([min, max].includes(n)) continue;
    sum += n;
  }

  return sum / (salary.length - 2);
}

module.exports = { average };
