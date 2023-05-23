/**
 * @param {any} object
 * @return {string}
 */
function jsonStringify(elm) {
  if (typeof elm === "string") {
    return `"${elm}"`;
  }
  if (["number", "boolean"].includes(typeof elm) || elm === null) {
    return String(elm);
  }
  if (typeof elm === "function" || elm === undefined) {
    return undefined;
  }

  let content = "";

  var keys = Object.keys(elm);
  for (let i = 0; i < keys.length; i++) {
    const v = jsonStringify(elm[keys[i]]);
    if (v === undefined) continue;

    if (content) content += ",";

    if (Array.isArray(elm)) {
      content += v;
    } else {
      content += `"${keys[i]}":${v}`;
    }
  }

  return Array.isArray(elm) ? `[${content}]` : `{${content}}`;
}

module.exports = { jsonStringify };
