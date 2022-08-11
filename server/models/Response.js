module.exports = class Response {
  constructor() {
    this.body = JSON.stringify({});
    this.statusCode = 400;
  }
};
