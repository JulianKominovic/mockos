const handleCollectionAccess = require("../../actions/collections/handleCollectionAccess");
const Mock = require("../../models/Mock");
const { addProxy, removeProxy } = require("../../proxy/cli");
const url = require("url");
const fs = require("../../proxy/fs");
const {
  getActiveMocksByMethodAndUrl,
} = require("../../actions/collections/handleCollectionAccess");

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

  buildMockResponse: async (req, res, next) => {
    const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

    const mock = await getActiveMocksByMethodAndUrl(req.method, fullUrl);

    if (!mock) {
      return res.status(400).send("No se encontró el mock ");
    }
    const { body, statusCode, responseType } = mock.response;

    res.locals.mockFound = mock;

    res
      .status(+statusCode)
      .setHeader(
        "Content-Type",
        responseType === "JSON" ? "application/json" : "plain/text"
      )
      .send(body);
    return next();
  },
};
