require("dotenv").config({
  path: "../.env",
});
const { json } = require("express");
const afterwareLogMock = require("./afterware/afterwareLogMock");
const { routes } = require("./controller");
const logger = require("./middleware/logger");
const dynamicMock = require("./modules/dynamic_mock");
const express = require("express"),
  PORT = process.env.PORT || 5000,
  app = express();

const clearProxySettings = require("./proxy/clearProxySettings");
const setupProxy = require("./proxy/setupProxy");

app.use(json());
app.use(logger.info());
app.use("/mocko", routes());
app.use("*", dynamicMock.router());
app.use(afterwareLogMock.logInfo);

const server = app.listen(PORT, () => {
  console.log(`start listening on port : ${PORT}`);
  setupProxy.init();
});

server.on("close", async () => {
  console.log("CLEANING IPTABLES");
  await clearProxySettings.init(process.cwd() + "/proxy/proxySettings.json");
  process.exit(0);
});

process.on("SIGINT", function () {
  server.close();
});
