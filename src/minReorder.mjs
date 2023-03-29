/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function (_, connections) {
  const directions = { 0: true };
  const unknownDirections = {};
  const seenIndexes = new Set();

  let result = 0;

  const checkRoad = (road, index) => {
    const [x, y] = road;

    const xExist = directions[x] !== undefined;
    const yExist = directions[y] !== undefined;

    if (!xExist && !yExist) {
      const unknowValue = new Set([index]);

      if (unknownDirections[x]) {
        unknownDirections[x].add(index);
      } else {
        unknownDirections[x] = unknowValue;
      }

      if (unknownDirections[y]) {
        unknownDirections[y].add(index);
      } else {
        unknownDirections[y] = unknowValue;
      }
      return;
    }

    if (xExist) {
      directions[y] = true;
      result += 1;
    }

    if (yExist) {
      directions[x] = true;
    }

    seenIndexes.add(index);

    const unknownDirection = unknownDirections[xExist ? y : x];
    if (unknownDirection) {
      Array.from(unknownDirection).forEach((i) => {
        unknownDirection.delete(i);

        if (!seenIndexes.has(i)) {
          checkRoad(connections[i], i);
        }
      });
    }
  };

  connections.forEach(checkRoad);

  return result;
};
