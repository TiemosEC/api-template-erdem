const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routers/router"); // Rename the router accordingly
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());
app.use("/", router);
app.use(function (req, res, next) {
  const errorData = {
    Error:
      "Write any Error here which will return this error message with Status 404",
  };
  res.status(404).send(res.json(errorData));
});

module.exports = app;
