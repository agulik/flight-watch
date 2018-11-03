const Xray = require("x-ray");

const x = Xray();

const crawl = async () => {
  console.log("crawling...");
  const response = await x(
    "https://www.secretflying.com/search2/?cityFrom=Montreal&cityTo=&month=",
    "article",
    [
      {
        deal: "h2 a"
      }
    ]
  );
  console.log(response);
};

crawl();
