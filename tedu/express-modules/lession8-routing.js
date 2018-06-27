var express = require("express");
var app = express();

// Phương thức get() phản hồi mot GET Request về Homepage
app.get("/", function(req, res) {
	console.log("Nhận một GET Request về Homepage");
	res.send("Hello GET");
});

// Phương thức post() phản hồi mot POST Request về Homepage
app.post("/", function(req, res) {
	console.log("Nhận một POST Request về Homepage");
	res.send("Hello POST");
});

// Phương thức delete() phản hồi mot DELETE Request về /del_user page.
app.delete("/del_user", function(req, res) {
	console.log("Nhận một DELETE Request về /del_user");
	res.send("Hello DELETE");
});

// Phương thức này phản hồi mot GET Request về /list_user page.
app.get("/list_user", function(req, res) {
	console.log("Nhận một GET Request về /list_user");
	res.send("Page Listing");
});

// Phương thức này phản hồi mot GET Request về abcd, abxcd, ab123cd, ...
app.get("/ab*cd", function(req, res) {
	console.log("Nhận một GET request về /ab*cd");
	res.send("Page Pattern Match");
});

var servềr = app.listen(8081, function() {
	var host = servềr.address().address;
	var port = servềr.address().port;

	console.log("Servềr running: http://%s:%s", host, port);
});
