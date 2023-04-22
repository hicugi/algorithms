/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = (s) => {
  const leftChars = s.split("");

  let leftChanges = 0;
  for (let i = 0, j = s.length - 1; i < j; i++) {
    if (leftChars[i] === leftChars[j]) {
      j--;
      continue;
    }

    leftChars.splice(j + 1, 0, leftChars[i]);
    leftChanges++;
  }

  const rightChars = s.split("");
  let rightChanges = 0;
  for (let i = s.length - 1, j = 0; i > j; i--) {
    if (rightChars[i] === rightChars[j]) {
      j++;
      continue;
    }

    rightChars.splice(j - 1, 0, rightChars[i]);
    rightChanges++;
  }

  return Math.min(leftChanges, rightChanges);
};

module.exports = { minInsertions };
