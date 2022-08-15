const express = require("express");
const url = require("url");
const fs = require("../../proxy/fs.js");
const controller = require("./controller.js");
const {
  getActiveMocksByMethodAndUrl,
} = require("../../actions/collections/handleCollectionAccess.js");
const EnumMethods = require("../../models/enums/EnumMethods.js");

const router = () => {
  const Router = express.Router();

  Router.use("*", (req, res, next) => controller.checkOrigin(req, res, next));
  Router.get("*", async (req, res) => {
    const fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    const mock = await getActiveMocksByMethodAndUrl(EnumMethods.GET, fullUrl);

    if (!mock) {
      return res.status(400).send("No se encontró el mock ");
    }
    const { body, statusCode, responseType } = mock.response;
    return res
      .status(statusCode)
      .setHeader(
        "Content-Type",
        responseType === "JSON" ? "application/json" : "plain/text"
      )
      .send(body);
  });

  return Router;
};
module.exports = router;
