import { app } from "./app"
//Tạo 1 router từ app của express với đường dẫn url là lists (ví dụ: http://localhost:8000/lists)
export const listRouter = app.route("/lists")

// Các phương thức get post put delete của router

listRouter.get((req, res) => {
	// Chỉ được trả về 1 trong 2- json hoặc send
	res.json({
		name: "Hoang11",
		age: 30,
		//get dữ liệu về qua link url (ví dụ: http://localhost:8000/lists?name=thanh)
		test: JSON.stringify(req.query)
	})
})
listRouter.post((req, res) => {
	// Chỉ được trả về 1 trong 2- json hoặc send
	res.json({
		name: "Hoang11",
		age: 30,
		//post dữ liệu lên kiểu ngầm (Sử dụng postman)
		test: JSON.stringify(req.body)
	})

	res.json({
		name: "Hoang11",
		age: 30,
		//post dữ liệu về qua link url (ví dụ: http://localhost:8000/lists?name=thanh)
		test: JSON.stringify(req.query)
	})
})
listRouter.put((req, res) => {
	res.send("is Put listRouter")
})

listRouter.delete((req, res) => {
	res.send("is Delete listRouter")
})
