const express = require("express");
const app = express();

//Sử dụng thư viện cookie-parser
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/cookie", (req, res) => {
	//Gửi cookie về client để lưu lại gồm key and value
	res.cookie("name", "oke");
	res.send("Save cookie");
});

app.get("/", (req, res) => {
	// Lấy được cookie đã lưu
	res.send(req.cookies);
});

app.listen(8081);
