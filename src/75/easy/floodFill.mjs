/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
  const fromColor = image[sr][sc];
  if (fromColor === color) return image;

  const fill = (y, x) => {
    if ((image[y] || {})[x] !== fromColor) return;
    image[y][x] = color;

    image.forEach((v) => console.log(v.join(" ")));

    fill(y + 1, x);
    fill(y - 1, x);
    fill(y, x + 1);
    fill(y, x - 1);
  };

  fill(sr, sc);

  return image;
};

module.exports = { floodFill };
