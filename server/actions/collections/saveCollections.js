const fs = require("fs/promises");
const path = require("path");

module.exports = async (collection) => {
  return JSON.parse(
    await fs.writeFile(path.resolve("store/collections/collections.json"), {
      encoding: "utf-8",
    })
  );
};
