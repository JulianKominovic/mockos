const { removeProxy } = require("./cli");
const fileSystem = require("./fs");
module.exports = {
  async init(location) {
    const ports = fileSystem.read(location);
    await Promise.allSettled(ports.map((p) => removeProxy(p)));
  },
};
