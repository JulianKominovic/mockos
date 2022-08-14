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
  Router.delete("/:id", (req, res) => controller.deleteMock(req, res));

  return Router;
};
module.exports = router;
