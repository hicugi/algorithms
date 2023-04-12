/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const result = [];
  const list = path.split("/");

  for (let i = 0; i < list.length; i++) {
    const dir = list[i];

    if (!dir) continue;
    if (dir === ".") continue;
    if (dir === "..") {
      result.pop();
      continue;
    }

    result.push(dir);
  }

  if (!result.length) return "/";
  return ["", ...result].join("/");
};

module.exports = { simplifyPath };
