/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
  people.sort((v1, v2) => (v1 > v2 ? 1 : v1 === v2 ? 0 : -1));

  // min weight >= limit
  if (people[0] >= limit) return people.length;

  let minIndex = 0;
  const lastIndex = people[people.length - 1] >= limit
    ? people.findIndex((v) => v >= limit) - 1
    : people.length;

  let result = people.length;

  for (let i = lastIndex; i > minIndex; i--) {
    if (people[minIndex] + people[i] <= limit) {
      result -= 1;
      minIndex += 1;
    }
  }

  return result;
};

module.exports = { numRescueBoats };
