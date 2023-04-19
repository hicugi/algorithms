const { longestZigZag } = require("./longestZigZag.mjs");

test("Example 1", () => {
  const data = '{"val":1,"left":null,"right":{"val":1,"left":{"val":1,"left":null,"right":null},"right":{"val":1,"left":{"val":1,"left":null,"right":{"val":1,"left":null,"right":{"val":1,"left":null,"right":{"val":1,"left":null,"right":null}}}},"right":{"val":1,"left":null,"right":null}}}}';
  const result = longestZigZag(JSON.parse(data));
  expect(result).toBe(3);
});
test("Example 2", () => {
  const data = '{"val":1,"left":{"val":1,"left":null,"right":{"val":1,"left":{"val":1,"left":null,"right":{"val":1,"left":null,"right":null}},"right":{"val":1,"left":null,"right":null}}},"right":{"val":1,"left":null,"right":null}}';
  const result = longestZigZag(JSON.parse(data));
  expect(result).toBe(4);
});
test("Example 3", () => {
  const data = '{"val":1,"left":null,"right":null}';
  const result = longestZigZag(JSON.parse(data));
  expect(result).toBe(0);
});

test("Testcase", () => {
  const data = '{"val":6,"left":{"val":9,"left":{"val":3,"left":{"val":5,"left":{"val":9,"left":{"val":1,"left":null,"right":{"val":1,"left":null,"right":null}},"right":{"val":2,"left":null,"right":null}},"right":{"val":4,"left":null,"right":null}},"right":{"val":8,"left":{"val":2,"left":{"val":6,"left":{"val":3,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}},"right":{"val":5,"left":null,"right":{"val":9,"left":null,"right":{"val":6,"left":{"val":10,"left":{"val":1,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":null}}}},"right":{"val":10,"left":null,"right":null}}},"right":null},"right":{"val":7,"left":{"val":2,"left":{"val":9,"left":null,"right":{"val":5,"left":null,"right":null}},"right":{"val":7,"left":{"val":4,"left":{"val":9,"left":null,"right":null},"right":null},"right":{"val":3,"left":{"val":9,"left":null,"right":null},"right":{"val":6,"left":null,"right":null}}}},"right":{"val":8,"left":{"val":3,"left":{"val":10,"left":{"val":5,"left":null,"right":null},"right":null},"right":{"val":10,"left":{"val":5,"left":{"val":9,"left":{"val":8,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}},"right":{"val":9,"left":null,"right":null}},"right":null}},"right":{"val":9,"left":{"val":9,"left":null,"right":{"val":7,"left":null,"right":null}},"right":{"val":4,"left":{"val":7,"left":null,"right":{"val":7,"left":null,"right":{"val":3,"left":{"val":1,"left":null,"right":null},"right":null}}},"right":{"val":4,"left":null,"right":null}}}}}}';

  const result = longestZigZag(JSON.parse(data));
  expect(result).toBe(5);
});
