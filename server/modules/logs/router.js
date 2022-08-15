const express = require("express");
const controller = require("./controller.js");
const router = () => {
  const Router = express.Router();
  Router.get("/", controller.get);
  Router.delete("/", controller.delete);

  return Router;
};
module.exports = router;
