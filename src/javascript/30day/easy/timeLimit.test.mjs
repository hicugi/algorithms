const { ERROR_MSG, timeLimit } = require("./timeLimit.mjs");

const sleep = (t) => new Promise((ok) => setTimeout(ok, t));

test("Example 1", async () => {
  const fn = (n) => sleep(100).then(() => n * n);
  const timeLimitFn = timeLimit(fn, 50);
  await timeLimitFn(5).catch((err) => {
    expect(err).toBe(ERROR_MSG);
  });
});
test("Example 2", async () => {
  const fn = (n) => sleep(100).then(() => n * n);
  const timeLimitFn = timeLimit(fn, 150);
  const result = await timeLimitFn(5);
  expect(result).toBe(25);
});
test("Example 3", async () => {
  const fn = (a, b) => sleep(120).then(() => a + b);
  const timeLimitFn = timeLimit(fn, 150);
  const result = await timeLimitFn(5, 10);
  expect(result).toBe(15);
});
