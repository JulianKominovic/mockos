const getCollections = require("../../actions/collections/getCollections");
const {
  addCollection,
  deleteCollection,
} = require("../../actions/collections/handleCollectionAccess");

module.exports = {
  get: async (req, res) => {
    return res.send(await getCollections());
  },
  createNewCollection: async (req, res) => {
    await addCollection(req.body.name);
    return res.send("OK");
  },
  delete: async (req, res) => {
    await deleteCollection(req.body.name);
    return res.send("OK");
  },
};
