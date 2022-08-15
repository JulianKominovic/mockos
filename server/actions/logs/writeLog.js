const readJson = require("../filesystem/readJson");
const saveJson = require("../filesystem/saveJson");
const fs = require("fs/promises");
const path = require("path");
module.exports = {
  writeLog: async (info) => {
    await fs.mkdir(path.resolve(`./store/logs/`), {
      recursive: true,
    });

    await saveJson(`logs/logs`, info);
  },
  readLog: async () => {
    return await readJson(`logs/logs`);
  },
};
