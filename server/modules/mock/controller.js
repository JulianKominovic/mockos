const handleCollectionAccess = require("../../actions/collections/handleCollectionAccess");
const Mock = require("../../models/Mock");
const { addProxy, removeProxy } = require("../../proxy/cli");
const url = require("url");
const {
  deleteMock,
} = require("../../actions/collections/handleCollectionAccess");

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
      console.log("NEW PORT ADDED");
      console.log(url.parse(reqBody?.url).port);
      addProxy(url.parse(reqBody?.url).port);
      return res.send("OK");
    } catch (err) {
      console.log(err);
      return res.send(err);
    }
  },
  updateActivationStatus: async (req, res, status) => {
    try {
      const updatedMock =
        await handleCollectionAccess.updateMockActivationStatus(
          req.params.id,
          status
        );
      if (!updatedMock) throw new Error("Error en el mock updateado");
      console.log(updatedMock);
      const port = url.parse(updatedMock.url).port;

      status ? addProxy(port) : removeProxy(port);
      return res.send("OK");
    } catch (err) {
      console.log(err);
      return res.send("ERROR UPDATING MOCK STATUS");
    }
  },
  deleteMock: async (req, res) => {
    await deleteMock(req.params.id);
    return res.send("OK");
  },
};
