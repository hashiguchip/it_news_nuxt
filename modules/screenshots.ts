// const options = {
//   screenSize: {
//     width: 320,
//     height: 480
//   },
//   shotSize: {
//     width: 320,
//     height: "all"
//   },
//   userAgent:
//     "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)" +
//     " AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g"
// };

const fs = require("fs");
const webshot = require("webshot");
const options = {
  streamType: "png",
  renderDelay: 3000
};

const sites = JSON.parse(fs.readFileSync("backgroundAPIs/data.json", "utf8"));

const storeDirectory = "assets/images/sites/";

sites.sites.forEach(site => {
  webshot(site.url, storeDirectory + site.image + ".png", options, function(
    err
  ) {
    // screenshot now saved
  });
});
