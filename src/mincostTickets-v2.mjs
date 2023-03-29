/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

const mincostTickets = (days, costs) => {
  const [costDay, costWeek, costMonth] = costs;

  const { length } = days;
  const prices = Array(length);

  for (let i = length - 1; i >= 0; i--) {
    const currentDay = days[i];

    const day = costDay + (prices[i + 1] || 0);

    let j = i + 1;
    while (j < length && days[j] < currentDay + 7) j++;
    const week = costWeek + (prices[j] || 0);

    while (j < length && days[j] < currentDay + 30) j++;
    const month = costMonth + (prices[j] || 0);

    prices[i] = Math.min(day, Math.min(week, month));
  }

  return prices[0];
};

module.exports = { mincostTickets };
