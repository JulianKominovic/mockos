const fs = require("fs/promises");
const path = require("path");

module.exports = async (collections) => {
  return await fs.writeFile(
    path.resolve("store/collections/collections.json"),
    JSON.stringify(collections),
    {
      encoding: "utf-8",
    }
  );
};
