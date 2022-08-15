const writeLog = require("../actions/logs/writeLog");

module.exports = {
  logInfo: async (req, res, next) => {
    const { mockFound, req_timestamp_init } = res.locals;

    if (mockFound) {
      const readFile = await writeLog.readLog();
      const logs = Object.values(readFile).length > 0 ? readFile : [];
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
          status: mockFound.response.statusCode,
          protocol: "http",
          timestamp: responseTimestamp,
          responseTimeInMs: Math.abs(responseTimestamp - req_timestamp_init),
        },
      };

      logs.push(logData);

      await writeLog.writeLog(logs);
    }
  },
};
