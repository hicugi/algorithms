/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  if (2 > stones.length) return stones[0] || 0;

  stones.sort((a, b) => {
    if (a === b) return 0;
    return a > b ? -1 : 1;
  });

  const addResult = (value) => {
    let index = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] <= value) break;
      index++;
    }
    stones.splice(index, 0, value);
  };

  while (stones.length > 1) {
    a = stones.shift();
    b = stones.shift();

    addResult(a - b);
  }

  return stones[0];
};

module.exports = { lastStoneWeight };
