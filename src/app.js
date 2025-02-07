const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();

// init middlewares

app.use(morgan("dev"));
// app.use(morgan("common"));
// app.use(morgan("combined"));
// morgan("short");
// morgan("tiny");

app.use(helmet());
app.use(compression());

// init db

// init router
app.get("/", (req, res, next) => {
  const strCompress = "Hello Fantipjs";
  return res.status(200).json({
    message: "Welcome Fantipjs!",
    metadata: strCompress.repeat(1000000),
  });
});
// handling error

module.exports = app;
