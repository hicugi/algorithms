/**
 * @param {number[]} items
 * @return {number}
 */
const maxSatisfaction = (items) => {
  if (items.length === 1) {
    return items[0] > 0 ? items[0] : 0;
  }

  items.sort((v1, v2) => (v1 > v2 ? 1 : v1 === v2 ? 0 : -1));

  let resut = items[items.length - 1];

  for (let i = items.length - 2; i >= 0; i--) {
    const value = items.slice(i).reduce((r, v, i) => r + v * (i + 1));
    if (value < resut) break;
    resut = value;
  }

  return resut > 0 ? resut : 0;
};

// -9 -8 -1 0 5
// -9 + 25 = 16
// -8 + 20 = 12

module.exports = { maxSatisfaction };
