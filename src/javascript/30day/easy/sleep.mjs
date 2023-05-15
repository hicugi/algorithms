/**
 * @param {number} millis
 */
const getTime = () => new Date().getTime();

async function sleep(millis) {
  const endTime = getTime() + millis;
  let interval;

  return new Promise((resolve) => {
    interval = setInterval(() => {
      if (endTime > getTime()) return;

      clearInterval(interval);
      resolve();
    });
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

module.exports = { sleep };
