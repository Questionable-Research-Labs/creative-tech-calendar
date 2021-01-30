const express = require("express");
const path = require("path");

let port = process.env.PORT !== undefined ? process.env.PORT : "3000";

let app = express();

app.use("/", express.static("dist"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
