import express from "express"
const app = express()

const server = app.listen(8888, () => {
	console.log(
		"server is running",
		server.address().address,
		server.address().port
	)
})

// Đặt dấu : phía trước id để tạo id là 1 biến của params
app.get("/tintuc/:id", (req, res) => {
	let i = req.params.id
	res.send(`Server nhận được id là  ${i}`)
})
