//freetuts.net/ham-writehead-va-setheader-trong-nodejs-671.html

var http = require("http")

// Hàm writeHead và setHeader

// Hàm response.writeHead  và response.setHeader dùng để thiết lập các tham số của header khi gửi kết quả về cho client

// Phải thiết lập header ở phía trên cùng của chương trình (phía trên code), nghĩa
// là nó phải được đặt trước các đoạn code như response.write(), response.end().

// Khi nào thì sử dụng hai hàm trên ? Câu trả lời tùy bạn thôi, bạn thích sử dụng
//  hàm nào cũng được.Tuy nhiên có một lưu ý là vấn đề ghi đè, nghĩa là hàm response.writeHead
//  sẽ ghi đè các tham số đã được thiết lập ở hàm response.setHeader nếu chúng trùng nhau.

// Bước 2: Khởi tạo server
var server = http
	.createServer((req, res) => {
		// Thiết lập Header
		res.writeHead(200, {
			"Context-type": "text/html"
		})
		res.end("dsadsadsa")
	})

	// Bước 3: Lắng nghe cổng 3000 thì thực hiện chương trình
	.listen(3000, () => {
		console.log(`Connected Successfull! ${server.address().port}`)
	})

const server2 = http
	.createServer((req, res) => {
		// Thiết lập Header
		res.setHeader("Context-type", "text/html")
		res.setHeader("author", "thehalfheart@gmail.com")
		res.setHeader("blog", "freetuts.net")
		res.writeHead(200, {})
		res.end()
	})
	// Bước 3: Lắng nghe cổng 3001 thì thực hiện chương trình
	.listen(3001, () => {
		console.log(`Connected Finish! ${server2.address().port}`)
	})
