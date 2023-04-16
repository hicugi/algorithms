/**
 * @param {string} s
 * @return {string}
 */
const isNumber = (n) => Number(n) >= 0;

const decodeString = (s) => {
  if (s.length === 1) {
    return isNumber(s) ? "" : s;
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== "]") {
      stack.push(char);
      continue;
    }

    let str = "";

    while (true) {
      const char = stack.pop();
      if (char === "[") break;
      str = char + str;
    }

    let n = "";
    while (isNumber(stack[stack.length - 1])) {
      const number = stack.pop();
      n = number + n;
    }

    stack.push(str.repeat(Number(n)));
  }

  return stack.join("");
};

module.exports = { decodeString };
