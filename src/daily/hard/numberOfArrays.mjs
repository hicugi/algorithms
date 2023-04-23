/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const mod = 1e9 + 7;
const numberOfArrays = (s, k) => {
  let ns = "";
  let nums = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    ns = s[i] + ns;
    if (ns[0] === "0") continue;

    const n = Number(ns);
    ns = "";

    if (n > k) continue;
    nums++;
  }

  if (!nums) return 0;

  let a = 1;
  let b = 1;
  for (let i = 1; i < nums; i++) {
    b = a * 2;
    a = b;
  }

  return b % mod;
};

module.exports = { numberOfArrays };
