/**
 * @param {string} s
 * @return {number}
 */
const getMinChanges = (s) => {
  const chars = s.split("");
  let changes = 0;
  for (let i = 0, j = s.length - 1; i < j; i++) {
    if (chars[i] === chars[j]) {
      j--;
      continue;
    }

    chars.splice(j + 1, 0, chars[i]);
    changes++;
  }

  return changes;
};

const minInsertions = (s) => {
  const leftChanges = getMinChanges(s);
  const rightChanges = getMinChanges(s.split("").reverse().join(""));

  return Math.min(leftChanges, rightChanges);
};

module.exports = { minInsertions };
