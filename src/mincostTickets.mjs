/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = (days, costs) => {
  const [costDay, costWeek, costMonth] = costs;

  let result = 0;

  const checkPrice = (index) => {
    const startDay = days[index];
    if (!startDay) return;

    let montlyIndex;
    let weeklyIndex;

    let currentPrice = 0;
    let dailyPrice = 0;
    let weeklyPrice = 0;
    let history = [];

    for (let i = index; i < days.length; i++) {
      const day = days[i];

      // past month
      if (day > startDay + 29) {
        break;
      }

      // month
      if (currentPrice > costMonth || weeklyPrice > costMonth) {
        montlyIndex = -1;
        for (let j = i; j < days.length; j++) {
          if (days[j] > startDay + 29) {
            montlyIndex = j;
          }
        }
        break;
      }

      // weekly
      if (day > startDay + 6 && currentPrice >= costWeek) {
        weeklyPrice = Math.floor((day - costWeek) / 7) * costWeek;
      }
      if (dailyPrice >= costWeek) {
        weeklyIndex = -1;
        for (let j = i; j < days.length; j++) {
          if (days[j] > startDay + 6) {
            weeklyIndex = j;
          }
        }
      }

      // daily
      if (day < startDay + 6 && dailyPrice < costWeek) {
        dailyPrice += costDay;
      }

      currentPrice += costDay;
      history.push(weeklyPrice);
    }

    result += montlyIndex !== undefined ? costMonth : weeklyIndex !== undefined ? costWeek : costDay;
    const nextIndex = montlyIndex !== undefined ? montlyIndex : weeklyIndex !== undefined ? weeklyIndex : index + 1;

    console.log(`${index}>${nextIndex}`, `${startDay}>${days[nextIndex]}`, `w:${weeklyIndex} m:${montlyIndex}`, result, history.join(","));
    checkPrice(nextIndex);
  };

  checkPrice(0);

  return result;
};

module.exports = { mincostTickets };
