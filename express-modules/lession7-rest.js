// vietjack.com/nodejs/restful_api_trong_nodejs.jsp

// GET - Được sử dụng chỉ để đọc các nguồn tài nguyên.

//   POST - Được sử đụng để tạo mới các nguồn tài nguyên.

//   PUT - Được sử dụng để cập nhật các bản ghi hiện tại và tạo mới nguồn tài nguyên.

//     DELETE - Được sử dụng để xóa các nguồn tài nguyên.

// Stt	URI	Phương thức HTTP	POST body	Kết quả
// Stt: 1 - URI:listUsers	- Phương thức HTTP: GET - POST body:	empty -> Kết quả:	Hiển thị danh sách user
// Stt: 2 - URI:addUser	 -  Phương thức HTTP: POST - POST body:	JSON String	-> Kết quả: Thêm một user mới
// Stt: 3 - URI:deleteUser - Phương thức HTTP:	DELETE - POST body:	JSON String	-> Kết quả: Xóa một user hiện tại.
// Stt: 4 - URI::id	- Phương thức HTTP: GET -	POST body: empty -> Kết quả:	Hiển thị chi tiết một user

const express = require("express");
const app = express();
const fs = require("fs");

//Đoạn code dưới đây để hiển thị danh sách các user

app.get("/listUsers", function(req, res) {
	//  Lấy ra đường dẫn hiện tại cuar file json và đọc nó

	fs.readFile(__dirname + "/" + "lession7.json", "utf8", function(err, data) {
		res.end(data);
	});
});

//Đoạn code dưới đây để thêm user mới vào danh sách

let user = {
	user4: {
		name: "Thành",
		password: "whatyourname",
		profession: "sinhvien",
		id: 4
	}
};

app.get("/addUser", function(req, res) {
	// Đọc tất cả các User đang tồn tại
	fs.readFile(__dirname + "/" + "lession7.json", "utf8", function(err, data) {
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		res.end(JSON.stringify(data));
	});
});

//http://localhost:8081/addUserr

app.get("/:id", (req, res) => {
	//Đọc tất cả các User đang tồn tại
	fs.readFile(__dirname + "/" + "lession7.json", "utf8", (err, data) => {
		// mặc định JSON ở dạng chuỗi. Phương thức dưới chuyển chuỗi JSON data thành object users

		users = JSON.parse(data);

		// Giá trị req.params.id = 2 (đéo hiểu sao luôn)
		// => user = users["user2"] tương đương với users.user2

		const user = users["user" + req.params.id];

		//   chuyển object user thành chuỗi JSON
		res.end(JSON.stringify(user));
	});
});

// API này tương tự như addUser API, tại đây bạn có thể nhận một dữ liệu đầu vào thông qua req.body
// và sau đó dựa vào userID để xóa User đó khỏi Database.Để đơn giản, giả sử chúng ta xóa user có ID là 2.

app.get("/deleteUser", (req, res) => {
	fs.readFile(__dirname + "/" + "lession7.json", "utf8", (err, data) => {
		// mặc định JSON ở dạng chuỗi. Phương thức dưới chuyển chuỗi JSON data thành object users

		data = JSON.parse(data);

		let id = 3;

		delete data["user" + id];

		res.end(JSON.stringify(data));
	});
});

const server = app.listen(8081, function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log("Server running: http://%s:%s", host, port);
});
