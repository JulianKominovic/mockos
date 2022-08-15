const writeLog = require("../../actions/logs/writeLog");

module.exports = {
  get: async (req, res) => {
    return res.send(await writeLog.readLog());
  },
  delete: async (req, res) => {
    await writeLog.writeLog([]);
    return res.send({ OK: "OK" });
  },
};
