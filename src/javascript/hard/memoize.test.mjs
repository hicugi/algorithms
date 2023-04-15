const { memoize } = require("./memoize.mjs");

/**
 * @param {Function} fn
 * @param {Array} argsList
 * @param {number} resultCalls
 * @param {Array} results
 */
const generateTest = (fn, argsList, resultCalls, results) => {
  const mockFn = jest.fn(fn);
  const memoizedFn = memoize(mockFn);

  for (let i = 0; i < argsList.length; i++) {
    const args = argsList[i];

    const result = memoizedFn(...args);
    expect(result).toEqual(results[i]);
  }

  const { calls } = mockFn.mock;
  expect(calls).toHaveLength(resultCalls);
};

test("Example 1", () => {
  const argsList = [
    [2, 2],
    [2, 2],
    [1, 2],
  ];
  generateTest((a, b) => a + b, argsList, 2, [4, 4, 3]);
});
test("Example 2", () => {
  const argsList = [
    [{}, {}],
    [{}, {}],
    [{}, {}],
  ];
  generateTest((a, b) => ({ ...a, ...b }), argsList, 3, [{}, {}, {}]);
});
test("Example 3", () => {
  const obj = {};
  const argsList = [
    [obj, obj],
    [obj, obj],
    [obj, obj],
  ];

  generateTest(() => [obj, obj], argsList, 1, [
    [{}, {}],
    [{}, {}],
    [{}, {}],
  ]);
});

test("Testcase 82", () => {
  const argsList = [[], [1], [1], [], [1, 2], [1, 2]];
  generateTest((...args) => args.reduce((a, b) => a + b, 0), argsList, 3, [0, 1, 1, 0, 3, 3]);
});
test("Testcase 79", () => {
  const argsList = [[1, 1, 1], [1, 1], [1], [1, 1], [1, 1, 1]];
  generateTest((...args) => args.reduce((a, b) => a + b, 0), argsList, 3, [3, 2, 1, 2, 3]);
});
