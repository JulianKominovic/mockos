const getCollections = require("../../actions/collections/getCollections");
const handleCollectionAccess = require("../../actions/collections/handleCollectionAccess");
const Mock = require("../../models/Mock");

module.exports = {
  get: async (req, res) => {
    return res.send(await getCollections());
  },
  post: async (req, res) => {},
};
