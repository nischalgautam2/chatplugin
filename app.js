const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/bundle.js"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/bundle.js"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
