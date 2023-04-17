/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max;
  }

  return candies;
};

module.exports = { kidsWithCandies };
