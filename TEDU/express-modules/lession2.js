var express = require("express");
var app = express();

// Phương thức get() phản hồi một GET Request ve Homepage
app.get("/", function(req, res) {
  console.log("Nhận một GET Request ve Homepage");
  res.send("Hello GET");
});

// Phương thức post() phản hồi một POST Request ve Homepage
app.post("/", function(req, res) {
  console.log("Nhận một POST Request ve Homepage");
  res.send("Hello POST");
});

// Phương thức delete() phản hồi một DELETE Request ve /del_user page.
app.delete("/del_user", function(req, res) {
  console.log("Nhận một DELETE Request ve /del_user");
  res.send("Hello DELETE");
});

// Phương thức nay phản hồi một GET Request ve /list_user page.
app.get("/list_user", function(req, res) {
  console.log("Nhận một GET Request ve /list_user");
  res.send("Page Listing");
});

// Phương thức nay phản hồi một GET Request ve abcd, abxcd, ab123cd, ...
app.get("/ab*cd", function(req, res) {
  console.log("Nhận một GET request ve /ab*cd");
  res.send("Page Pattern Match");
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    "Ứng dụng Node.js đang lắng nghe tại địa chi: http://%s:%s",
    host,
    port
  );
});
