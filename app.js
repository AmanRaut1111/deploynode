const express = require("express");
// require("dotenv").config();

console.log(process.env.PORT);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD by Aman Raut f");
});

app.listen(3000, () => {
  console.log("sever is listeming on port 3000");
});

console.log("env veriable added");
