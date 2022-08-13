const handleCollectionAccess = require("../../actions/collections/handleCollectionAccess");
const Mock = require("../../models/Mock");

module.exports = {
  post: async (req, res) => {
    const mocko = new Mock();
    const reqBody = req?.body;
    console.log(req?.body);

    if (reqBody?.id) mocko.setId(reqBody?.id);
    mocko.setName(reqBody?.name);
    mocko.setDescription(reqBody?.description);
    mocko.setMethod(reqBody?.method);
    mocko.setResponse(reqBody?.response);
    mocko.setUrl(reqBody?.url);
    mocko.setCollection(reqBody?.collection);
    reqBody?.activated ? mocko.activate() : mocko.deactivate();

    try {
      reqBody?.id
        ? await handleCollectionAccess.replaceMock(mocko)
        : await handleCollectionAccess.addMock(mocko);
      return res.send("OK");
    } catch (err) {
      return res.send(err);
    }
  },
};
