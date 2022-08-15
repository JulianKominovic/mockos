const writeLog = require("../actions/logs/writeLog");

module.exports = {
  logInfo: async (req, res, next) => {
    console.log("AFTERWARE");
    const { mockFound, req_timestamp_init } = res.locals;

    if (mockFound) {
      const readFile = await writeLog.readLog(mockFound.id);
      const logs = Object.values(readFile).length > 0 ? readFile : [];
      console.log(logs);
      const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

      const responseTimestamp = new Date();

      const logData = {
        request: {
          fullUrl,
          method: req.method,
          body: req.body,
          cookies: req.cookies,
          params: req.params,
          protocol: req.protocol,
          timestamp: req_timestamp_init,
        },
        response: {
          method: mockFound.method,
          body: mockFound.response.body,
          protocol: "http",
          timestamp: responseTimestamp,
          responseTimeInMs: Math.abs(responseTimestamp - req_timestamp_init),
        },
      };

      logs.push(logData);

      await writeLog.writeLog(mockFound.id, logs);
    }
  },
};
