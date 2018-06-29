// Socket.io là một mô hình websocket được đóng gói chạy với NodeJS
// Giữ cho client và server ở trạng thái luôn kết nối
// khả năng phản hồi nhanh với yêu cầu
// hỗ trợ ứng dụng thời gian thực

const http = require("http"),
	socketIO = require("socket.io")

//cách để  lấy các biến môi trường để host ở cloud
const port = process.env.PORT || 8080,
	ip = process.env.IP || "127.0.0.1"

const server = http.createServer().listen(port, ip, function() {
		console.log("Server is running!", ip, port)
	}),
	io = socketIO.listen(server)
io.set("match origin protocol", true)
io.set("origins", "*:*")

// io.set(string option, mixed value) là phương thức cài đặt các cấu hình cho socket.io.

// io.set('match origin protocol', true); là config để bạn có thể chạy được node.js server
//  cùng với socket.io server.Nói nôm na là nó phân biệt được đâu là socket.io, đâu là node.js
//  server.Bạn nên config, vì server chỉ dùng để chạy socket.io không thôi cũng phí.

// io.set('origins', ':'); là config để socket.io server sẽ nhận những client ở domain nào port nào,
//  ở đây là 'nhận tất'.Tuy nhiên để đảm bảo socket.io server phục vụ đúng client và bảo mật, khi
// triển khai thực tế, web của bạn chạy ở domain nào, port nào thì bạn nên chỉ rõ.

//---------------------------------------------------

// đoạn mã định nghĩa để xử lý 1 client - socket khi socket đó kết nối đến server của bạn.
// Tham số socket đại diện cho chính client vừa kết nối đó.
var run = socket => {
	// Phương thức socket.emit(string event, object data) sẽ thực hiện
	// việc phát 1 sự kiên về client và đồng thời gửi dữ liệu data về client.
	socket.emit("greeting", "Chào mừng bạn đến với socket.io")
}

// Đây là đoạn mã triệu gọi xử lý run ở trên khi client dùng socket kết nối thành công đến server.
io.sockets.on("connection", run)
