const { createHelloWorld } = require("./createHelloWorld.mjs");

test("Example 1", () => {
  const fn = createHelloWorld([]);
  expect(fn()).toBe("Hello World");
});
test("Example 2", () => {
  const fn = createHelloWorld([{}, null, 42]);
  expect(fn()).toBe("Hello World");
});
