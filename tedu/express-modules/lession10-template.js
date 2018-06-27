const express = require("express");

const app = express();

//Tên của view engine là pug (chưa thấy có tác dụng gì, comment lại vẫn chạy như thường)

app.set("view engine", "pug");

//Set lại đường dẫn trỏ tới thư mục
// app.set("views", "./express-modules/views");

app.get("/", (req, res) => {
	// Dùng res render ra view.pug
	//Mặc định nó sẽ search xem có file view.pug này không

	//Render tên file và đổ dữ liệu vào
	res.render("view.pug", { title: "Welcome", message: "Hello Word" });
});
const server = app.listen(8888, () => {
	console.log(
		`Server rung ning : ` + server.address().address + server.address().port
	);
});
