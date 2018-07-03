const express = require("express")

const app = express()

const server = require("http").createServer(app)

//Nối socket.io vào server
const io = require("socket.io")(server)

app.get("/", (req, res, next) => {
	//Trả về 1 file index.html
	res.sendfile(__dirname + "/public/index.html")
})

// chỉ ra file cần tìm trong thư mục public
app.use(express.static("public"))

io.on("connection", client => {
	console.log("Client running...")

	client.on("join", data => {
		console.log(data)
	})
	client.on("messages", data => {
		client.emit("thread", data)
		client.broadcast.emit("thread", data)
	})
})
server.listen(8000)
console.log("Server is")
