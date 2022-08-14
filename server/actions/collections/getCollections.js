const readJson = require("../filesystem/readJson");
module.exports = async (path) => {
  return await readJson("collections", path);
};
