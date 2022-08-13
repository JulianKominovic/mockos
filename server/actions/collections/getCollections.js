const readJson = require("../filesystem/readJson");
module.exports = async () => {
  return await readJson("collections");
};
