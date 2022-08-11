const express = require("express");
const collections = require("../modules/collections");
const routes = () => {
  const router = express.Router();
  router.all("/collections", collections.router());

  router.all("*", (req, res) => res.send("404"));
  return router;
};
module.exports = {
  routes,
};
