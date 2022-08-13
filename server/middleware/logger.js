const formatter = (req) => {
  const { method, body, url } = req;
  return `[REQUEST INCOMING] [URL=${url}] [METHOD=${method}] [BODY=${JSON.stringify(
    body,
    null,
    2
  )}]`;
};
module.exports = {
  info: () => {
    return (req, res, next) => {
      console.log(`[INFO] [${new Date()}] ${formatter(req)}`);
      next();
    };
  },
};
