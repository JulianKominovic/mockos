const getCollections = require("./getCollections");
const saveCollections = require("./saveCollections");
const url = require("url");

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
  addCollection: async (collectionName) => {
    const collections = await getCollections();
    collections[collectionName] = [];
    return await saveCollections(collections);
  },
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
  deleteMock: async (id) => {
    const collections = await getCollections();
    const collectionsKeys = Object.keys(collections);
    collectionsKeys.forEach((key) => {
      const foundIndex = collections[key].findIndex((mock) => {
        return mock.id === id;
      });
      if (foundIndex !== -1) {
        collections[key] = collections[key].filter((mocko) => mocko.id !== id);
        if (collections[key].length === 0) delete collections[key];
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
    await saveCollections(collections);
    return collections[key][foundIndex];
  },

  getAllPortsOfActive: async (path) => {
    const collections = await getCollections(path);
    const ports = [];

    Object.values(collections)
      .flat()
      .forEach((mock) => {
        if (!mock.url || typeof mock.url !== "string" || !mock.activated)
          return;
        const { port } = url.parse(mock.url);
        if (port >= 3000 && port <= 10000) {
          ports.push(port);
        }
      });

    return ports;
  },

  getActiveMocksByMethodAndUrl: async (method, url, path) => {
    const collections = await getCollections(path);

    return Object.values(collections)
      .flat()
      .filter(
        (collect) =>
          collect.activated && collect.method === method && collect.url === url
      );
  },
};
