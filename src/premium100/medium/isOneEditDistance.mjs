/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = (s, t) => {
  if (s === t) return false;
  if (Math.abs(s.length - t.length) > 1) return false;

  const length = Math.max(s.length, t.length);

  let isChanged = false;
  for (let i = 0; i < length; i++) {
    if (s[i] === t[i]) continue;
    if (isChanged) return false;

    isChanged = true;

    if (s.length > t.length) {
      s = [s.substring(0, i), s.substring(i + 1)].join("");
      continue;
    }
    if (s.length < t.length) {
      s = [s.substring(0, i), t[i], s.substring(i)].join("");
      continue;
    }

    s = [s.substring(0, i), t[i], s.substring(i + 1)].join("");
  }

  return true;
};

module.exports = { isOneEditDistance };
