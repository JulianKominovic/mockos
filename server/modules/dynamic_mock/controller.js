const handleCollectionAccess = require("../../actions/collections/handleCollectionAccess");
const Mock = require("../../models/Mock");
const { addProxy, removeProxy } = require("../../proxy/cli");
const url = require("url");
const fs = require("../../proxy/fs");

module.exports = {
  checkOrigin: async (req, res, next) => {
    const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    const port = url.parse(fullUrl).port;

    const ports = await fs.read();

    if (+port !== +process.env.PORT && ports.some((p) => +p === +port)) {
      next();
    } else {
      res.status(403).send({
        message: `Esta request proveniente de ${req.get(
          "host"
        )} no está permitida`,
      });
    }
  },

  buildMockResponse: (req, res) => {},
};
