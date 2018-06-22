var express = require("express");
var app = express();

//http://localhost:8081/images/img.png
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.send("Hello World");
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log(
		"Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s",
		host,
		port
	);
});
