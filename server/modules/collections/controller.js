const getCollections = require("../../actions/collections/getCollections");

module.exports = {
  get: async (req, res) => {
    return res.send(await getCollections());
  },
};
