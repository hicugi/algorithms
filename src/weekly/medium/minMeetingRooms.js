/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(items) {
  items.sort(([a], [b]) => a - b);

  var result = 0;
  var active = [];

  for (var i = 0; i < items.length; i++) {
    var [start, end] = items[i];

    for (var j = 0; j < active.length; ) {
      if (start >= active[j]) {
        active.splice(j, 1);
      }
      j++;
    }

    active.push(end);

    result = Math.max(result, active.length);
  }

  return result;
}

module.exports = { minMeetingRooms };
