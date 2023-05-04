/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  const list = senate.split("");

  let countR = 0;
  let countD = 0;
  for (let char of list) {
    if (char === "R") countR++;
    else countD++;
  }

  function ban(char, index) {
    let loopAround = false;
    let pointer = index;

    for (let i = 0; i < list.length; i++) {
      if (pointer === 0) {
        loopAround = true;
      }

      if (list[pointer] === char) {
        list.splice(pointer, 1);
        break;
      }

      pointer = (pointer + 1) % list.length;
    }

    return loopAround;
  }

  let turn = 0;
  while (countR && countD) {
    if (list[turn] === "R") {
      isBannedBefore = ban("D", (turn + 1) % list.length);
      countD--;
    } else {
      isBannedBefore = ban("R", (turn + 1) % list.length);
      countR--;
    }

    if (isBannedBefore) turn--;

    turn = (turn + 1) % list.length;
  }

  return countD === 0 ? "Radiant" : "Dire";
}

module.exports = { predictPartyVictory };
