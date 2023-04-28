/**
 * @param {string[]} strs
 * @return {number}
 */
function numSimilarGroups(strs) {
  const { length } = strs;
  const adj = new Array(length).fill().map((_) => new Array());

  function isSimilar(s1, s2) {
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) diff++;
    }

    return diff === 0 || diff === 2;
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) continue;
      if (!isSimilar(strs[i], strs[j])) continue;

      adj[i].push(j);
      adj[j].push(i);
    }
  }

  function dfs(index) {
    history[index] = true;

    for (let i of adj[index]) {
      if (!history[i]) dfs(i);
    }
  }

  let result = 0;
  const history = {};

  for (let i = 0; i < length; i++) {
    if (!history[i]) {
      dfs(i);
      result++;
    }
  }

  console.log(adj, history);

  return result;
}

module.exports = { numSimilarGroups };
