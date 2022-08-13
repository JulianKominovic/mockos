const getCollections = require("./getCollections");
const saveCollections = require("./saveCollections");

const findMockInCollection = async (id) => {
  const collections = await getCollections();
  const collectionsKeys = Object.keys(collections);
  const mockLocation = {
    key: null,
    foundIndex: null,
  };

  collectionsKeys.forEach((key) => {
    const foundIndex = collections[key].findIndex((mock) => {
      return mock.id === id;
    });
    if (foundIndex !== -1) {
      console.log("ENCONTRADO EN INDEX " + foundIndex);
      mockLocation.key = key;
      mockLocation.foundIndex = foundIndex;
    }
  });

  return mockLocation;
};

module.exports = {
  addMock: async (mock) => {
    const collections = await getCollections();

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
  replaceMock: async (newMock) => {
    const collections = await getCollections();
    const collectionsKeys = Object.keys(collections);

    collectionsKeys.forEach((key) => {
      const foundIndex = collections[key].findIndex((mock) => {
        return mock.id === newMock.id;
      });
      if (foundIndex !== -1) {
        collections[key][foundIndex] = newMock;
      }
    });

    return await saveCollections(collections);
  },

  updateMockActivationStatus: async (id, status) => {
    const { key, foundIndex } = await findMockInCollection(id);
    const collections = await getCollections();
    if (key === null || foundIndex === null)
      throw new Error(`ID=${id} - NOT FOUND`);
    collections[key][foundIndex] = {
      ...collections[key][foundIndex],
      activated: status,
    };
    return await saveCollections(collections);
  },
};
