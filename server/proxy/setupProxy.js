"use strict";

const {
  getAllPortsOfActive,
} = require("../actions/collections/handleCollectionAccess");
const { addProxy } = require("./cli");

module.exports = {
  init: () =>
    getAllPortsOfActive("./store/").then((res) => {
      [...new Set(res)].forEach((p) => addProxy(p));
    }),
};
