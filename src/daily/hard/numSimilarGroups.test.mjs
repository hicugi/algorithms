const { numSimilarGroups } = require("./numSimilarGroups.mjs");

test("Example 1", () => {
  const result = numSimilarGroups(["tars", "rats", "arts", "star"]);
  expect(result).toEqual(2);
});
test("Example 2", () => {
  const result = numSimilarGroups(["omv", "ovm"]);
  expect(result).toEqual(1);
});

test("Testcase 76", () => {
  const result = numSimilarGroups(["vbwvpd", "vdwbpv", "bdvvwp", "bvwvdp"]);
  expect(result).toEqual(4);
});
