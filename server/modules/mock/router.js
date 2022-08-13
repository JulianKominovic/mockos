const express = require("express");
const controller = require("./controller.js");
const router = () => {
  const Router = express.Router();
  Router.post("*", controller.post);

  return Router;
};
module.exports = router;
