const EnumMethods = require("./enums/EnumMethods");
const crypto = require("crypto");
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
  activate() {
    this.activate = true;
  }
  deactivate() {
    this.activate = true;
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