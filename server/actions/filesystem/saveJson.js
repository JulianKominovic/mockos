const fs = require("fs/promises");
const path = require("path");

module.exports = async (filename = "", json) =>
  await fs.writeFile(
    path.resolve(`./store/${filename}.json`),
    JSON.stringify(json),
    {
      encoding: "utf-8",
    }
  );
