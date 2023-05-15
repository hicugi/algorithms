const { sleep } = require("./sleep.mjs");

const getTime = () => Date.now();

test("Example 1", async () => {
  const t = getTime();

  const millis = 100;
  await sleep(millis);
  expect(getTime() - t).toBe(millis);
});
test("Example 2", async () => {
  const t = getTime();

  const millis = 200;
  await sleep(millis);
  expect(getTime() - t).toBe(millis);
});
