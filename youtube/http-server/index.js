// Bước 1: Import module http and fs

const http = require("http")

var fs = require("fs")

// Bước 2: Khởi tạo server

const server = http.createServer((req, res) => {
	// Biến request: là biến lưu trữ thông tin gửi lên của client
	// Biến response: là biến lưu trữ các thông tin trả về cho client

	// Kiểm tra URL truy cập phải trang about ko

	if (req.url == "/about") {
		// - Ở đây readFile() là function Đọc file
		fs.readFile("./about.html", "utf8", (err, data) => {
			if (err) throw err
			// in ra nội dung đọc được
			res.write(data)
			res.end()
		})
	} else {
		// Thiết lập Header
		res.writeHead(404, { "Content-Type": "text/html" })

		// Show thông tin không tìm thấy trang
		res.write(`404 Not Found ${req.url}`)

		// Kết thúc
		res.end()
	}
})

// Bước 3: Lắng nghe cổng 8000 thì thực hiện chương trình

server.listen(8000, () => {
	console.log(`server is running: ${server.address().port}`)
})
