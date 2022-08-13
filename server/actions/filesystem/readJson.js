const fs = require("fs/promises");
const path = require("path");
module.exports = async (filename = "") => {
  try {
    return JSON.parse(
      await fs.readFile(path.resolve(`store/${filename}.json`), {
        encoding: "utf-8",
      })
    );
  } catch (err) {
    console.log(err);
    return {};
  }
};
