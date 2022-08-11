const fs = require("fs/promises");
const path = require("path");

module.exports = async () => {
  return JSON.parse(
    await fs.readFile(path.resolve("store/collections/collections.json"), {
      encoding: "utf-8",
    })
  );
};
