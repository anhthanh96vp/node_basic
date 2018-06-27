//Middleware sẽ đóng vai trò trung gian giữa request / response(tương tác với người dùng) và các xử lý logic bên trong web server.

// Trong Express, có 5 kiểu middleware có thể sử dụng:

// Application - level middleware(middleware cấp ứng dụng)
// Router - level middleware(middlware cấp điều hướng - router)
// Error - handling middleware(middleware xử lý lỗi)
// Built -in middleware(middleware sẵn có)
// Third - party middleware(middleware của bên thứ ba)

const express = require("express");

const app = express();

//Sau khi chạy xong middleware này thì nó mới được chạy tiếp bên dưới
app.use((req, res, next) => {
	console.log("Middleware 1");
	next();
});

app.get("/", (req, res) => {
	res.send("Welcome to Viet Nam");
	console.log("test 1");
});

app.get("/hello", (req, res) => {
	res.send("Hello Word");
	console.log("test2");
});

const server = app.listen(8888, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Server running : ", host + port);
});
