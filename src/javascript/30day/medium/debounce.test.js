const { debounce } = require("./debounce.js");

const sleep = (t) => new Promise((ok) => setTimeout(ok, t));

test("Example 1", async () => {
  const t = 125;
  const mockFn = jest.fn(() => null);
  const debounceFn = debounce(mockFn, t);

  debounceFn();
  await sleep(50);
  debounceFn();
  await sleep(75);
  await sleep(t);

  expect(mockFn.mock.calls.length).toBe(1);
});
test("Example 2", async () => {
  const t = 20;
  const mockFn = jest.fn(() => null);
  const debounceFn = debounce(mockFn, t);

  debounceFn();
  await sleep(50);
  debounceFn();
  await sleep(100);
  await sleep(t);

  expect(mockFn.mock.calls.length).toBe(2);
});
test("Example 3", async () => {
  const t = 150;
  const mockFn = jest.fn(() => null);
  const debounceFn = debounce(mockFn, t);

  debounceFn();
  await sleep(50);
  debounceFn();
  await sleep(300);
  debounceFn();
  await sleep(t);

  expect(mockFn.mock.calls.length).toBe(2);
});
