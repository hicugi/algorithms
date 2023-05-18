const { TimeLimitedCache } = require("./TimeLimitedCache");

const sleep = (t) => new Promise((ok) => setTimeout(ok, t));

test("Example 1", async () => {
  const cache = new TimeLimitedCache();

  const result = [cache.set(1, 42, 100), cache.get(1), cache.count()];
  await sleep(100);
  result.push(cache.get(1));

  expect(result).toEqual([false, 42, 1, -1]);
});
test("Example 2", async () => {
  const cache = new TimeLimitedCache();

  const result = [cache.set(1, 42, 50)];
  await sleep(40);
  result.push(cache.set(1, 50, 100), cache.get(1));
  await sleep(90);
  result.push(cache.get(1));
  await sleep(20);
  result.push(cache.get(1));

  expect(result).toEqual([false, true, 50, 50, -1]);
});
