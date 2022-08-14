const fs = require("fs");
const path = require("path");
module.exports = {
  write: (ports) => {
    return fs.writeFileSync(
      path.resolve("./proxy/proxySettings.json"),
      JSON.stringify(ports),
      {
        encoding: "utf-8",
      }
    );
  },
  read: () => {
    return JSON.parse(
      fs.readFileSync(path.resolve("./proxy/proxySettings.json"), {
        encoding: "utf-8",
      })
    );
  },
};
