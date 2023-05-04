const { predictPartyVictory } = require("./predictPartyVictory.mjs");

test("Example 1", () => {
  const result = predictPartyVictory("RD");
  expect(result).toBe("Radiant");
});
test("Example 2", () => {
  const result = predictPartyVictory("RDD");
  expect(result).toBe("Dire");
});
test("Example 3", () => {
  const result = predictPartyVictory("DDRRR");
  expect(result).toBe("Dire");
});
