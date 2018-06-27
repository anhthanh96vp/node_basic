const express = require("express");
const app = express();

// chỉ cần truyền tên thư mục nơi bạn giữ các file này, express.static sẽ sử dụng file đó một cách trực tiếp
app.use(express.static("public"));

app.get("/lession4.html", function(req, res) {
	// Phương thức này được sử dụng để truyền tải File tại địa chỉ path đã cho.Thiết lập Content - Type dựa trên phần đuôi của tên file.
	//  Biến __dirname biến global, có giá trị là đường dẫn hiện tại
	res.sendFile(__dirname + "/" + "lession4.html");
});

app.get("/process_get", function(req, res) {
	// Chuẩn bị output trong định dạng JSON

	//Lấy nội dung value ô nhập input ở file html
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	//   chuyển object JSON thành chuỗi
	res.end(JSON.stringify(response));
});

const server = app.listen(8081, function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log(
		"Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s",
		host,
		port
	);
});

//localhost:8081/lession4.html
