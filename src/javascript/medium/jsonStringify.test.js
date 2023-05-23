const { jsonStringify } = require("./jsonStringify.js");

test("Example 1", () => {
  const result = jsonStringify({ y: 1, x: 2 });
  expect(result).toBe('{"y":1,"x":2}');
});
test("Example 2", () => {
  const result = jsonStringify({ a: "str", b: -12, c: true, d: null });
  expect(result).toBe('{"a":"str","b":-12,"c":true,"d":null}');
});
test("Example 3", () => {
  const result = jsonStringify({ key: { a: 1, b: [{}, null, "Hello"] } });
  expect(result).toBe('{"key":{"a":1,"b":[{},null,"Hello"]}}');
});
test("Example 4", () => {
  const result = jsonStringify(true);
  expect(result).toBe("true");
});
