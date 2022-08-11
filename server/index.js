const { routes } = require("./controller");

const express = require("express"),
  PORT = 5000,
  app = express();

app.use("/api/v1", routes());

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
