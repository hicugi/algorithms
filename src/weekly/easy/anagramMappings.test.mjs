const { anagramMappings } = require("./anagramMappings.mjs");

test("Example 1", () => {
  const result = anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]);
  expect(result).toEqual([1, 4, 3, 2, 0]);
});
test("Example 2", () => {
  const result = anagramMappings([84, 46], [84, 46]);
  expect(result).toEqual([0, 1]);
});
