/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceAction = (s) => {
  let res = "";
  let action = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];

    if (c === "#") {
      action += 1;
      continue;
    }

    if (action > 0) {
      action -= 1;
      continue;
    }

    res += c;
  }

  return res;
};

const backspaceCompare = (s, t) => {
  return backspaceAction(s) === backspaceAction(t);
};

module.exports = { backspaceCompare };
