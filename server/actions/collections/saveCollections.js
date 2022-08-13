const saveJson = require("../filesystem/saveJson");

module.exports = async (collections) => {
  return await saveJson("collections", collections);
};
