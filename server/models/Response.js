const StatusCode = require("./enums/StatusCode");

module.exports = class Response {
  constructor() {
    this.headers = JSON.stringify({});
    this.statusCode = StatusCode[200];
    this.body = JSON.stringify({});
    this.responseType = "JSON";
  }
  setHeaders(json) {
    this.headers = json;
  }
  setStatusCode(StatusCode = StatusCode[200]) {
    this.statusCode = StatusCode;
  }
  setBody(json) {
    this.body = JSON.stringify(json);
  }
  setResponseType(res) {
    this.responseType = res;
  }
};
