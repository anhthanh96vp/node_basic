import express from "express"
const app = express()

const server = app.listen(8888, () => {
	console.log(
		"server is running",
		server.address().address,
		server.address().port
	)
})

import bodyParser from "body-parser"

// Sử dụng cái này để post dữ bằng cách tạo trên postman
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/login", urlencodedParser, (req, res) => {
	//Kiểm tra
	if (!req.body) return res.sendStatus(400)

	let u = req.body.username
	let p = req.body.password
	res.send(`Username  ${u} Password ${p}`)
})

//Sử dụng cái này để post dữ liệu trực tiếp lên luôn
const jsonParser = bodyParser.json()

app.post("/users", jsonParser, (req, res) => {
	//Kiểm tra
	if (!req.body) return res.sendStatus(400)

	req.body = {
		username: "tuấn",
		password: 456
	}
	res.send(req.body)
})

