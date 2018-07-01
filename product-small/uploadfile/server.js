const express = require("express")
const multer = require("multer")
const app = express()

// diskStorage cần 2 thuộc tính là destination và filename

//Mục đích hàm này là sử dụng lưu trữ file ở đâu và file gì

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		// vị trí upload lên
		callback(null, "./upload")
	},
	filename: (req, file, callback) => {
		callback(null, file.originalname)
	}
})

// Thằng multer được truyền vào storage với tham số là thằng storage bên trên
//thằng singe tên phải giống tên của input type="flie" bên trang html
const upload = multer({ storage: storage }).single("files")

//Vào trang chủ load ra trang index.html
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
})

app.post("/upload", (req, res) => {
	upload(req, res, err => {
		if (err) {
			return res.end("Error")
		}
		res.end("File upload finish")
	})
})

const server = app.listen(8888, () => {
	console.log(
		"Server running: " + server.address().address + server.address().port
	)
})
