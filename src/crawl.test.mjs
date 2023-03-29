const { crawl } = require("./crawl.mjs");

describe("Official:", () => {
  test("Example 1", () => {
    const result = crawl("http://news.yahoo.com/news/topics/", {
      maps: new Map([
        ["http://news.yahoo.com", 0],
        ["http://news.yahoo.com/news", 1],
        ["http://news.yahoo.com/news/topics/", 2],
        ["http://news.google.com", 3],
        ["http://news.yahoo.com/us", 4],
      ]),
      urls: ["http://news.yahoo.com", "http://news.yahoo.com/news", "http://news.yahoo.com/news/topics/", "http://news.google.com", "http://news.yahoo.com/us"],
      a: new Map([
        [2, [0, 1]],
        [3, [2, 1]],
        [0, [4]],
      ]),
    });
    const expectResult = ["http://news.yahoo.com", "http://news.yahoo.com/news", "http://news.yahoo.com/news/topics/", "http://news.yahoo.com/us"];

    expect(result).toEqual(expect.arrayContaining(expectResult));
  });

  test("Example 2", () => {
    const result = crawl("http://news.google.com", {
      maps: new Map([
        ["http://news.yahoo.com", 0],
        ["http://news.yahoo.com/news", 1],
        ["http://news.yahoo.com/news/topics/", 2],
        ["http://news.google.com", 3],
        ["http://news.yahoo.com/us", 4],
      ]),
      urls: ["http://news.yahoo.com", "http://news.yahoo.com/news", "http://news.yahoo.com/news/topics/", "http://news.google.com", "http://news.yahoo.com/us"],
      a: new Map([
        [0, [2]],
        [2, [1]],
        [3, [2, 1, 0]],
      ]),
    });
    const expectResult = ["http://news.google.com"];

    expect(result).toEqual(expect.arrayContaining(expectResult));
  });

  test("Example 18", () => {
    const result = crawl("http://news.yahoo.com/oil-price-fundamental-weekly-forecast-200421659.html", {
      maps: new Map([
        ["http://news.yahoo.com/jeffrey-epsteins-autopsy-inconclusive-death-095824588.html", 0],
        ["http://news.yahoo.com/death-toll-climbs-75-tanzania-fuel-tanker-blast-134315372.html", 1],
        ["http://news.yahoo.com/news/topics/microsoft", 2],
        ["http://news.yahoo.com/tagged/skullduggery/", 3],
        ["http://news.yahoo.com/twitter-ivanka-trump-eid-mubarak-message-muslims-233902039.html", 4],
        ["http://news.yahoo.com/why-augusts-full-moon-called-070000083.html", 5],
        ["http://news.yahoo.com/oil-price-fundamental-weekly-forecast-200421659.html", 6],
        ["http://news.google.com/./publications/CAAqBggKMPCrATDARQ?hl=en-US&gl=US&ceid=US%3Aen", 7],
        ["http://news.google.com/stories/articles/CAIiEEw6pbRkyQPOey1yDG5q8m8qGQgEKhAIACoHCAowvIaCCzDnxf4CMN2F8gU?hl=en-US&gl=US&ceid=US%3Aen", 8],
        ["http://news.google.com/stories/articles/CBMiO2h0dHBzOi8vd3d3LnRvd2xlcm9hZC5jb20vMjAxOS8wOC90cnVtcC1lbmRhbmdlcmVkLXNwZWNpZXMv0gEA?hl=en-US&gl=US&ceid=US%3Aen", 9],
      ]),
      urls: ["http://news.yahoo.com/jeffrey-epsteins-autopsy-inconclusive-death-095824588.html", "http://news.yahoo.com/death-toll-climbs-75-tanzania-fuel-tanker-blast-134315372.html", "http://news.yahoo.com/news/topics/microsoft", "http://news.yahoo.com/tagged/skullduggery/", "http://news.yahoo.com/twitter-ivanka-trump-eid-mubarak-message-muslims-233902039.html", "http://news.yahoo.com/why-augusts-full-moon-called-070000083.html", "http://news.yahoo.com/oil-price-fundamental-weekly-forecast-200421659.html", "http://news.google.com/./publications/CAAqBggKMPCrATDARQ?hl=en-US&gl=US&ceid=US%3Aen", "http://news.google.com/stories/articles/CAIiEEw6pbRkyQPOey1yDG5q8m8qGQgEKhAIACoHCAowvIaCCzDnxf4CMN2F8gU?hl=en-US&gl=US&ceid=US%3Aen", "http://news.google.com/stories/articles/CBMiO2h0dHBzOi8vd3d3LnRvd2xlcm9hZC5jb20vMjAxOS8wOC90cnVtcC1lbmRhbmdlcmVkLXNwZWNpZXMv0gEA?hl=en-US&gl=US&ceid=US%3Aen"],
      a: new Map([
        [0, [6, 3, 0]],
        [1, [0]],
        [2, [4, 1, 4, 9]],
        [3, [3]],
        [4, [3, 0]],
        [5, [4, 3, 6]],
        [6, [8]],
        [7, [8, 7, 0]],
        [8, [8]],
        [10, [4]],
      ]),
    });
    const expectResult = ["http://news.yahoo.com/oil-price-fundamental-weekly-forecast-200421659.html"];

    expect(result).toEqual(expect.arrayContaining(expectResult));
  });
});
