const { cloneGraph } = require("./cloneGraph.mjs");

describe("Example:", () => {
  test("1", () => {
    const val1 = { val: 1, neighbors: [] };
    const val2 = { val: 2, neighbors: [] };
    const val3 = { val: 3, neighbors: [] };
    const val4 = { val: 4, neighbors: [] };

    val1.neighbors.push(val2, val4);
    val2.neighbors.push(val1, val3);
    val3.neighbors.push(val2, val4);
    val4.neighbors.push(val1, val3);

    const root = val1;

    const result = cloneGraph(root);

    expect(result).toEqual([
      [val2, val4],
      [val1, val3],
      [val2, val4],
      [val1, val3],
    ]);
  });
  test("2", () => {
    const result = cloneGraph({ val: 1, neighbors: [] });
    expect(result).toEqual([[]]);
  });
  test("3", () => {
    const result = cloneGraph(null);
    expect(result).toEqual([]);
  });
});
