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
  Router.all("*", controller.buildMockResponse);

  return Router;
};
module.exports = router;
