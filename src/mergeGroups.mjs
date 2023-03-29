/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

const mergeSetters = (items1, items2) => {
  const values = items2.values();
  do {
    let { value } = values.next();
    if (!value) break;
    
    items1.add(value);
  } while (1);
};
const mergeGroups = (result, [v1, v2]) => {
  const group1 = result.find((items) => items.has(v1));
  const group2 = result.find((items) => items.has(v2));

  if (!group1 && !group2) return false;
  if (group1 === group2) return true;

  if (!group1 || !group2) {
    if (!group1) group2.add(v1);
    if (!group2) group1.add(v2);
    return true;
  }

  if (group1.size >= group2.size) {
    mergeSetters(group1, group2);

    const group2Index = result.findIndex((items) => items.has(v2));
    result.splice(group2Index, 1);
  } else {
    mergeSetters(group2, group1);

    const group1Index = result.findIndex((items) => items.has(v1));
    result.splice(group1Index, 1);
  }

  return true;
};

const makeConnected = function (n, connections) {
  if (n - 1 > connections.length) {
    return -1;
  }

  let avaiable = 0;
  const alreadySeen = [];

  connections.forEach(([v1, v2]) => {
    if (alreadySeen.includes(v1) || alreadySeen.includes(v2)) {
      avaiable += 1;
      return;
    }

    alreadySeen.push(v1, v2);
  });

  let result = 0;
  const flatConnections = new Set(connections.flat());

  for (let i = 0; i < n; i++) {
    if (flatConnections.has(i)) continue;

    result += 1;
    avaiable -= 1;
  }

  const netGroups = connections.reduce((res, item) => {
    const isMerged = mergeGroups(res, item);

    if (!isMerged) {
      res.push(new Set(item));
    }

    return res;
  }, []);

  if (netGroups.length > 1) {
    result += netGroups.length - 1;
    avaiable -= netGroups.length - 1;
  }

  return avaiable >= 0 ? result : -1;
};

export default makeConnected;
