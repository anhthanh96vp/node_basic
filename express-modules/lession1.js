//Khai báo gói express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome nodejs modules express");
});

const server = app.listen(8888, () => {
  console.log(`Server Running : ${server.address().port}`);
});
