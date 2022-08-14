const fs = require("fs/promises");
const path = require("path");

module.exports = async (filename = "", loc) => {
  try {
    return JSON.parse(
      await fs.readFile(path.resolve(`${loc || "./store/"}${filename}.json`), {
        encoding: "utf-8",
      })
    );
  } catch (err) {
    console.log(err);
    return {};
  }
};
