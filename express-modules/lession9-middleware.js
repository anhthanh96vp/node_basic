//Middleware sẽ đóng vai trò trung gian giữa request / response(tương tác với người dùng) và các xử lý logic bên trong web server.

Trong Express, có 5 kiểu middleware có thể sử dụng:

// Application - level middleware(middleware cấp ứng dụng)
// Router - level middleware(middlware cấp điều hướng - router)
// Error - handling middleware(middleware xử lý lỗi)
// Built -in middleware(middleware sẵn có)
// Third - party middleware(middleware của bên thứ ba)


const express = require("express");

const app = express();

app.use((req, res, next) => {

});

app.get("/", (req, res) => {
	res.send("Welcome to Viet Nam");
});

app.get("/hello", (req, res) => {
	res.send("Hello Word");
});

const server = app.listen(8888, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Server running : ", host + port);
});
