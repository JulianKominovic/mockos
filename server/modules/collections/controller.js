const getCollections = require("../../actions/collections/getCollections");
const handleCollectionAccess = require("../../actions/collections/handleCollectionAccess");
const Mock = require("../../models/Mock");

module.exports = {
  get: async (req, res) => {
    return res.send(await getCollections());
  },
  post: async (req, res) => {
    const mocko = new Mock();
    const reqBody = req?.body;
    console.log(req?.body);

    mocko.setName(reqBody?.name);
    mocko.setDescription(reqBody?.description);
    mocko.setMethod(reqBody?.method);
    mocko.setResponse(reqBody?.response);
    mocko.setUrl(reqBody?.url);
    mocko.setCollection(reqBody?.collection);

    try {
      await handleCollectionAccess.addMock(mocko);
      return res.send("OK");
    } catch (err) {
      return res.send(err);
    }
  },
};