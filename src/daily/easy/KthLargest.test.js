const { KthLargest } = require("./KthLargest.js");

test("Example 1", () => {
  const obj = new KthLargest(3, [4, 5, 8, 2]);

  result = [];
  result.push(obj.add(3));
  result.push(obj.add(5));
  result.push(obj.add(10));
  result.push(obj.add(9));
  result.push(obj.add(4));

  expect(result).toEqual([4, 5, 5, 8, 8]);
});
