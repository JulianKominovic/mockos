const readJson = require("../filesystem/readJson");
const saveJson = require("../filesystem/saveJson");
const fs = require("fs/promises");
const path = require("path");
module.exports = {
  writeLog: async (mockId, info) => {
    await fs.mkdir(path.resolve(`./store/logs/`), {
      recursive: true,
    });

    await saveJson(`logs/${mockId}`, info);
  },
  readLog: async (mockId) => {
    return await readJson(`logs/${mockId}`);
  },
};
