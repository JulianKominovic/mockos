const getCollections = require("./getCollections");
const saveCollections = require("./saveCollections");

module.exports = {
  addMock: async (mock) => {
    const collections = await getCollections();
    console.log(mock.collection);
    if (mock.collection) {
      if (
        collections[mock.collection] &&
        collections[mock.collection]?.length > 0
      ) {
        collections[mock.collection]?.filter((item) => item.id === mock.id);
        collections[mock.collection]?.push(mock);
      } else {
        collections[mock.collection] = [mock];
      }
    } else {
      collections["no-collection"]?.length > 0
        ? collections["no-collection"].push(mock)
        : (collections["no-collection"] = [mock]);
    }

    return await saveCollections(collections);
  },
};
