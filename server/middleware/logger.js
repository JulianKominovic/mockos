const formatter = (req) => {
  const { method, body, url } = req;
  return `[REQUEST INCOMING] [ORIGIN=${req.get(
    "host"
  )}] [URL=${url}] [METHOD=${method}] [BODY=${JSON.stringify(body, null, 2)}]`;
};
module.exports = {
  info: () => {
    return (req, res, next) => {
      const timestamp = new Date();
      console.log(`[INFO] [${timestamp}] ${formatter(req)}`);
      res.locals.req_timestamp_init = timestamp;
      next();
    };
  },
};
