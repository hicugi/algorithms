/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
 */
const getDoamin = (url) => {
  const domain = url.match(/\/\/(.+?)(:|\/|$)/);
  return domain && domain[1];
};

const crawl = function (startUrl, htmlParser) {
  const domain = getDoamin(startUrl);
  if (!domain) return [];

  const { urls, maps, a } = htmlParser;

  const history = { [startUrl]: true };
  const result = [startUrl];

  const urlIndexes = {};
  urls.forEach((url) => {
    urlIndexes[maps.get(url)] = url;
  });

  const fetchLinks = (url) => {
    const linkIndexes = a.get(maps.get(url));
    if (!linkIndexes) return;

    linkIndexes.forEach((index) => {
      const nextUrl = urlIndexes[index];
      if (!nextUrl) return;
      checkUrl(nextUrl, index);
    });
  };

  const checkUrl = (url, index) => {
    if (!url.includes(domain)) return;
    if (history[url]) return;
    history[url] = true;

    result.push(url);
    fetchLinks(url);
  };

  fetchLinks(startUrl);

  return result;
};

module.exports = { crawl };
