const express = require("express");
const collections = require("../modules/collections");
const statuses = require("../modules/statuses");
const mocks = require("../modules/mock");
const routes = () => {
  const router = express.Router();
  router.use("/collections", collections.router());
  router.use("/statuses", statuses.router());
  router.use("/mocks", mocks.router());

  router.use("*", (req, res) => {
    res.status(404).send("404");
  });
  return router;
};
module.exports = {
  routes,
};
