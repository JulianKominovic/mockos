module.exports = class Collection {
  constructor() {
    this.name = "";
    this.description = "";
    this.mocks = [];
  }

  addMock(mock) {
    this.mocks.push(mock);
  }
  removeMock(mock) {
    this.mocks = this.mocks.filter((item) => item.id !== mock.id);
  }
};
