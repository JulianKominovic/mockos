const EnumMethods = require("./enums/EnumMethods");
const crypto = require("crypto");
const Response = require("./Response");
module.exports = class Mock {
  constructor() {
    this.id = crypto.randomUUID();
    this.name = "";
    this.description = "";
    this.collection = null;
    this.method = EnumMethods.GET;
    this.url = "/mock";
    this.response = new Response();
    this.timestamp = new Date();
    this.activated = false;
  }
  setId(id) {
    this.id = id;
  }
  activate() {
    this.activated = true;
  }
  deactivate() {
    this.activated = true;
  }
  setName(name) {
    this.name = name || "";
  }
  setDescription(desc) {
    this.description = desc || "";
  }
  setCollection(collection) {
    this.collection = collection || null;
  }
  setMethod(method) {
    this.method = method || EnumMethods.GET;
  }
  setResponse(response) {
    this.response = response || null;
  }
  setUrl(url = "") {
    this.url = url || null;
  }
};
