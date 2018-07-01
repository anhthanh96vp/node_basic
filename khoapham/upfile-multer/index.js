import express from "express"
import multer from "multer"

const app = express()

const server = app.listen(3000, () => {
	console.log(`server is running: ${server.address().port}`)
})

//Dòng khai báo để sử dụng engine ejs
app.set("view engine", "ejs")

//Dòng này cung cấp đường dẫn ở thư mục ./views
app.set("views", "./views")

// CẤU HÌNH MULTER

// diskStorage cần 2 thuộc tính là destination và filename
//Mục đích hàm này là sử dụng lưu trữ file ở đâu và file gì

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		// vị trí upload lên
		callback(null, "./upload")
	},
	filename: (req, file, callback) => {
		// file.originalname là mặc định tên lúc ban đầu
		callback(null, file.originalname)
	}
})

// Thằng multer được truyền vào storage với tham số là thằng storage bên trên
//thằng singe tên phải giống tên của input type="flie" bên trang
const upload = multer({ storage: storage }).single("file")

//Load ra trang ejs
app.get("/", (req, res) => {
	res.render("form")
})

app.post("/upload", (req, res) => {
	//Kiểm tra xem có lỗi không
	upload(req, res, err => {
		if (err) {
			return res.end("Error")
		}
		console.log(req.file)
		res.end("File upload finish")
	})
})
