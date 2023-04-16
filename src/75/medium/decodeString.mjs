/**
 * @param {string} s
 * @return {string}
 */
const getChild = (s, i) => {
  let endLine = 0;
  let brackets = 0;

  for (let j = i; j < s.length; j++) {
    const childChar = s[j];
    if (childChar === "[") {
      brackets += 1;
      continue;
    }
    if (childChar === "]") {
      if (brackets === 0) {
        endLine = j + 1;
        break;
      }

      brackets--;
    }
  }

  return s.substring(i, endLine - 1);
};

const decodeString = (s, level = 0) => {
  let result = "";
  let letter = "";
  let num = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    const value = Number(char);

    // num
    if (typeof num === "string" && value >= 0) {
      num += char;
      continue;
    }

    // after [
    if (value >= 0) {
      const child = getChild(s, i);
      letter = `${letter}${decodeString(child, level + 1)}`;
      i += child.length - 1;
      continue;
    }

    // chars: [ ] a-z
    switch (char) {
      case "[":
        result += letter;
        letter = "";
        num = Number(num);
        continue;
      case "]":
        result += letter.repeat(num);
        num = "";
        letter = "";
        continue;
      default:
        letter += char;
    }
  }

  return result + letter;
};

module.exports = { decodeString };

// 3[a2[c]]     > accaccacc

// 3[z]2[2[y]pq4[2[jk]e1[f]]]ef
//     2[2[y]pq4[2[jk]e1[f]]]ef     zzz
//           pq4[2[jk]e1[f]]]ef     zzz yy
//             4[2[jk]e1[f]]]ef     zzz yy pq
//             4[     e1[f]]]ef     zzz yy pq jkjk
//             4[      1[f]]]ef     zzz yy pq jkjk e
//             4[          ]]ef     zzz yy pq jkjk f
//             4[  jkjkef  ]]ef     zzz yy pq jkjkef

// 3[z]2[2[y]pq4[ 2[jk]e1[f]] ]ef   jkjkef
// 3[z]2[ 2[y]pq4[jkjkef] ]ef       yypqjkjkefjkjkefjkjkefjkjkef
