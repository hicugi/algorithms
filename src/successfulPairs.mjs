/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
  potions.sort((v1, v2) => (v1 > v2 ? 1 : v1 === v2 ? 0 : -1));

  const result = [];
  const { length } = potions;

  for (let spell of spells) {
    const min = Math.ceil(success / spell);

    const index = min <= potions[0]
      ? 0
      : min > potions[length - 1]
        ? length
        : potions.findIndex((v) => v >= min);

    result.push(length - index);
  }

  return result;
};

module.exports = { successfulPairs };
