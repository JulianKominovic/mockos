const express = require("express");
const authModule = require("../modules/auth");
const routes = () => {
  const router = express.Router();
  router.all("/auth", authModule.routes());

  return router;
};
module.exports = {
  routes,
};
