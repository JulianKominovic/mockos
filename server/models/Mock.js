import EnumMethods from "./enums/EnumMethods";

export default class Mock {
  constructor() {
    this.method = EnumMethods.GET;
    this.url = "/mock";
    this.response = {};
  }
}
