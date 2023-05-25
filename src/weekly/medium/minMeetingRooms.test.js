const { minMeetingRooms } = require("./minMeetingRooms.js");

test("Example 1", () => {
  const result = minMeetingRooms(JSON.parse("[[0,30],[5,10],[15,20]]"));
  expect(result).toBe(2);
});
test("Example 2", () => {
  const result = minMeetingRooms(JSON.parse("[[7,10],[2,4]]"));
  expect(result).toBe(1);
});
