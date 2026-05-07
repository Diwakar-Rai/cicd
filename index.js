const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
app.use("/", (req, res) => {
  res.send("<h1>Welcome to this APP</h1>");
});
app.listen(5000, () => {
  console.log("App running on PORT 5000");
});
