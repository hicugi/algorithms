/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = (s) => {
  const { length } = s;
  const rs = s.split("").reverse().join("");

  const memo = {};

  const check = (s, rs, i, ri) => {
    if (!i || !ri) return 0;

    const key = `${i}.${ri}`;
    if (memo[key]) return memo[key];

    if (s[i - 1] === rs[ri - 1]) {
      return (memo[key] = 1 + check(s, rs, i - 1, ri - 1));
    }

    return (memo[key] = Math.max(check(s, rs, i - 1, ri), check(s, rs, i, ri - 1)));
  };

  return length - check(s, rs, length, length);
};

module.exports = { minInsertions };
