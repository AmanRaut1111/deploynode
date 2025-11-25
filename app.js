const express = require("express");
// require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD by Aman Raut 11111111111 ");
});

app.listen(3000, () => {
  console.log("sever is listeming on port 3000");
});
