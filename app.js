const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD by Aman r ");
});

app.listen(3000, () => {
  console.log("sever is listeming on port 3000");
});
