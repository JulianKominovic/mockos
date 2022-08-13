const { json } = require("express");
const { routes } = require("./controller");
const logger = require("./middleware/logger");

const express = require("express"),
  PORT = 5000,
  app = express();

app.use(json());
app.use(logger.info());
app.use("/api/v1", routes());

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
