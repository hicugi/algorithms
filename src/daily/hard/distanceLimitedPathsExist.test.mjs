const { distanceLimitedPathsExist } = require("./distanceLimitedPathsExist.mjs");

test("Example 1", () => {
  const edgeList = JSON.parse("[[0,1,2],[1,2,4],[2,0,8],[1,0,16]]");
  const queries = JSON.parse("[[0,1,2],[0,2,5]]");
  const result = distanceLimitedPathsExist(3, edgeList, queries);
  expect(result).toEqual([false, true]);
});
test("Example 2", () => {
  const edgeList = JSON.parse("[[0,1,10],[1,2,5],[2,3,9],[3,4,13]]");
  const queries = JSON.parse("[[0,4,14],[1,4,13]]");
  const result = distanceLimitedPathsExist(5, edgeList, queries);
  expect(result).toEqual([true, false]);
});

test("Testcase 2", () => {
  const edgeList = JSON.parse("[[9,1,53],[3,2,66],[12,5,99],[9,7,26],[1,4,78],[11,1,62],[3,10,50],[12,1,71],[12,6,63],[1,10,63],[9,10,88],[9,11,59],[1,4,37],[4,2,63],[0,2,26],[6,12,98],[9,11,99],[4,5,40],[2,8,25],[4,2,35],[8,10,9],[11,9,25],[10,11,11],[7,6,89],[2,4,99],[10,4,63]]");
  const queries = JSON.parse("[[9,7,65],[9,6,1],[4,5,34],[10,8,43],[3,7,76],[4,2,15],[7,6,52],[2,0,50],[7,6,62],[1,0,81],[4,5,35],[0,11,86],[12,5,50],[11,2,2],[9,5,6],[12,0,95],[10,6,9],[9,4,73],[6,10,48],[12,0,91],[9,10,58],[9,8,73],[2,3,44],[7,11,83],[5,3,14],[6,2,33]]");
  const result = distanceLimitedPathsExist(13, edgeList, queries);
  expect(result).toEqual([true, false, false, true, true, false, false, true, false, true, false, true, false, false, false, true, false, true, false, true, true, true, false, true, false, false]);
});
