const express = require("express");
const collections = require("../modules/collections");
const statuses = require("../modules/statuses");
const routes = () => {
  const router = express.Router();
  router.all("/collections", collections.router());
  router.all("/statuses", statuses.router());

  router.all("*", (req, res) => res.send("404"));
  return router;
};
module.exports = {
  routes,
};
