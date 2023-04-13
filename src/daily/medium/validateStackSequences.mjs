/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = (pushed, popped) => {
  let i = 0;

  while (pushed[i] !== undefined) {
    const value = pushed[i];

    if (value === popped[0]) {
      popped.shift();
      pushed.splice(i, 1);

      i = i > 0 ? i - 1 : 0;
      continue;
    }

    i++;
  }

  return !pushed.length && !popped.length;
};

module.exports = { validateStackSequences };
