const express = require("express");
const controller = require("./controller.js");
const router = () => {
  const Router = express.Router();
  Router.post("*", controller.post);
  Router.get("/activate/:id", (req, res) =>
    controller.updateActivationStatus(req, res, true)
  );
  Router.get("/disable/:id", (req, res) =>
    controller.updateActivationStatus(req, res, false)
  );

  return Router;
};
module.exports = router;
