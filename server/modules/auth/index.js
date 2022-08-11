const express = require("express");
const { handleGetRoute } = require("./controller");
const routes = () => {
  const Router = express.Router();

  Router.get("/", handleGetRoute);

  return Router;
};

const authModule = {
  routes,
};

module.exports = authModule;
