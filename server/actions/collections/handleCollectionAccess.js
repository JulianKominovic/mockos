const getCollections = require("./getCollections");
const saveCollections = require("./saveCollections");
const url = require("url");
const proxyFs = require("../../proxy/fs");
const { removeProxy, addProxy } = require("../../proxy/cli");

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
      mockLocation.key = key;
      mockLocation.foundIndex = foundIndex;
    }
  });

  return mockLocation;
};

const getAllPortsOfActive = async (path) => {
  const collections = await getCollections();
  const ports = [];

  if (!collections) throw new Error("No se encontraron collections");

  Object.values(collections)
    .flat()
    .forEach((mock) => {
      if (!mock.url || typeof mock.url !== "string" || !mock.activated) return;
      const { port } = url.parse(mock.url);
      if (port >= 3000 && port <= 10000) {
        ports.push(port);
      }
    });

  return ports;
};

const shouldExcludePort = async (activePorts, port) => {
  try {
    let numbersOfSamePort = 0;
    activePorts.forEach((p) => {
      if (p === port) numbersOfSamePort++;
    });

    if (numbersOfSamePort <= 1) {
      console.log(`RE-ADJUSTING PORTS - REMOVING PORT ${port}`);
      removeProxy(port);
    }
  } catch (err) {
    console.log(err);
  }
};

const shouldIncludePort = async (activePorts, port) => {
  try {
    let numbersOfSamePort = 0;

    activePorts.forEach((p) => {
      if (p === port) numbersOfSamePort++;
    });
    console.log("NUMBER OF SAME PORTS");
    console.log(numbersOfSamePort);
    if (numbersOfSamePort === 0) {
      console.log(`RE-ADJUSTING PORTS - ADDING PORT ${port}`);
      addProxy(port);
      return true;
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

const recalculatePorts = async (port) => {
  // const activePorts = await getAllPortsOfActive();
  // let alreadyIncludedPort = false;
  // try {
  //   alreadyIncludedPort = await shouldIncludePort(activePorts, port);
  //   if (!alreadyIncludedPort) await shouldExcludePort(activePorts, port);
  // } catch (err) {
  //   console.log(err);
  // }
};

const tryDeletingPort = async (port) => {
  const activePorts = await getAllPortsOfActive();
  console.log("ACTIVE PORTS");
  console.log(activePorts);
  await shouldExcludePort(activePorts, port);
};

const tryAddingPort = async (port) => {
  const activePorts = await getAllPortsOfActive();
  console.log("ACTIVE PORTS");
  console.log(activePorts);

  await shouldIncludePort(activePorts, port);
};

module.exports = {
  addCollection: async (collectionName) => {
    const collections = await getCollections();
    collections[collectionName] = [];
    return await saveCollections(collections);
  },
  deleteCollection: async (collectionName) => {
    const collections = await getCollections();
    const collectionPorts = [];
    collections[collectionName].forEach((mock) => {
      collectionPorts.push(url.parse(mock.url).port);
    });

    delete collections[collectionName];

    await saveCollections(collections);
    await Promise.allSettled(collectionPorts.map((p) => tryDeletingPort(p)));

    return;
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
    await tryAddingPort(url.parse(mock.url).port);
    return await saveCollections(collections);
  },
  replaceMock: async (newMock) => {
    const collections = await getCollections();
    const collectionsKeys = Object.keys(collections);

    let oldMock = {};

    collectionsKeys.forEach((key) => {
      const foundIndex = collections[key].findIndex((mock) => {
        return mock.id === newMock.id;
      });
      if (foundIndex !== -1) {
        oldMock = { ...collections[key][foundIndex] };
        collections[key][foundIndex] = {
          ...collections[key][foundIndex],
          ...newMock,
        };
      }
    });

    const oldMockPort = url.parse(oldMock.url).port;
    const newMockPort = url.parse(newMock.url).port;
    if (oldMockPort !== newMockPort) {
      await tryDeletingPort(oldMockPort);
      await tryAddingPort(newMockPort);
    }

    await saveCollections(collections);
  },
  deleteMock: async (id) => {
    const collections = await getCollections();
    const collectionsKeys = Object.keys(collections);
    let portOfDeletedMock = 0;
    collectionsKeys.forEach((key) => {
      const foundIndex = collections[key].findIndex((mock) => {
        return mock.id === id;
      });

      if (foundIndex !== -1) {
        portOfDeletedMock = url.parse(collections[key][foundIndex].url).port;
        collections[key] = collections[key].filter((mocko) => mocko.id !== id);
        if (collections[key].length === 0) delete collections[key];
      }
    });
    await tryDeletingPort(portOfDeletedMock);

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

    const portOfMock = url.parse(collections[key][foundIndex].url).port;

    status
      ? await tryAddingPort(portOfMock)
      : await tryDeletingPort(portOfMock);

    await saveCollections(collections);
    return collections[key][foundIndex];
  },

  getAllPortsOfActive,

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
