import express from "express"
const app = express()

const server = app.listen(8888, () => {
	console.log(
		"server is running",
		server.address().address,
		server.address().port
	)
})

// ** CẤU HÌNH EJS-TEMPALTE **

//Dòng khai báo để sử dụng engine ejs
app.set("view engine", "ejs")

//Dòng này cung cấp đường dẫn ở thư mục ./views
app.set("views", "./views")

//Chạy bằng link localhost:8888/hello
app.get("/hello", (req, res) => {
	//Sử dụng res.render để render file ejs và cả json
	res.render("ejs", {
		name: "Super Mario",
		age: 18,
		birthYear: [1993, 1995, 1997, 1999]
	})
})
